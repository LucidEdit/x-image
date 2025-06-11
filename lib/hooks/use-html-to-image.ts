"use client";

import { useState } from "react";
import {
  ImageVariant,
  UseHtmlToImageReturn,
  UseHtmlToImageOptions,
  ImageResult as ImportedImageResult,
} from "@/types";
import { uploadXImage } from "@/lib/utils/storage-utils";
import { createBeautifulTextImage } from "@/text-to-image";

export interface HtmlToImageOptions {
  width?: number;
  height?: number;
  scale?: number;
  format?: "png" | "jpeg" | "webp";
  quality?: number;
  fullPage?: boolean;
  darkMode?: boolean;
  delayMs?: number;
  body?: string;
  wrap?: boolean;
  fontLinks?: string[];
  customCSS?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  transparent?: boolean;
  markdown?: string;
  preset?: "a4-poster" | "manifesto" | "book-excerpt" | "dark-mono-poster" | "highlighted-book" | "marker-highlight";
}

interface LocalImageResult {
  blob: Blob;
  url: string;
  download: (filename: string) => void;
}

// Map old presets to new theme names
const presetToThemeMap: Record<string, string> = {
  "a4-poster": "a4-poster",
  "book-excerpt": "book-excerpt",
  "highlighted-book": "highlighted-book",
  manifesto: "manifesto",
  "dark-mono-poster": "dark-mono-poster",
  "marker-highlight": "marker-highlight",
};

// Map light mode highlight colors to dark mode colors
const lightToDarkHighlightMap: Record<string, string> = {
  // Direct HSL values
  "hsl(54, 91%, 85%)": "hsl(54, 50%, 25%)", // Yellow
  "hsl(0, 93%, 85%)": "hsl(0, 50%, 25%)", // Red
  "hsl(138, 76%, 85%)": "hsl(138, 40%, 25%)", // Green
  "hsl(214, 95%, 85%)": "hsl(214, 50%, 25%)", // Blue
  "hsl(270, 95%, 90%)": "hsl(270, 50%, 25%)", // Purple

  // CSS custom property formats
  "hsl(var(--highlight-yellow))": "hsl(54, 50%, 25%)",
  "hsl(var(--highlight-red))": "hsl(0, 50%, 25%)",
  "hsl(var(--highlight-green))": "hsl(138, 40%, 25%)",
  "hsl(var(--highlight-blue))": "hsl(214, 50%, 25%)",
  "hsl(var(--highlight-purple))": "hsl(270, 50%, 25%)",

  // Space-separated format (CSS custom property values)
  "54 91% 85%": "54 50% 25%", // Yellow
  "0 93% 85%": "0 50% 25%", // Red
  "138 76% 85%": "138 40% 25%", // Green
  "214 95% 85%": "214 50% 25%", // Blue
  "270 95% 90%": "270 50% 25%", // Purple
};

function transformHighlightColorsForDarkMode(html: string): string {
  let transformedHtml = html;

  // Transform each light mode highlight color to its dark mode equivalent
  Object.entries(lightToDarkHighlightMap).forEach(([lightColor, darkColor]) => {
    // Escape special regex characters, handling both parentheses and other special chars
    const escapedLightColor = lightColor.replace(
      /[()[\]{}+*?^$|.\\-]/g,
      "\\$&",
    );
    const regex = new RegExp(escapedLightColor, "g");
    transformedHtml = transformedHtml.replace(regex, darkColor);
  });

  return transformedHtml;
}

export function useHtmlToImage(
  options: UseHtmlToImageOptions = {},
): UseHtmlToImageReturn {
  const { uploadToXImage = false } = options;
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async (
    html: string,
    options: HtmlToImageOptions = {},
  ): Promise<LocalImageResult> => {
    setIsGenerating(true);
    setError(null);

    try {
      // Map preset to theme name
      const themeName = options.preset
        ? presetToThemeMap[options.preset] || "book-excerpt"
        : "book-excerpt";

      // Transform highlight colors for dark mode presets
      let processedHtml = html;
      if (options.preset === "dark-mono-poster") {
        processedHtml = transformHighlightColorsForDarkMode(html);
      }
      
      // Remove background-color from mark elements for marker-highlight theme
      if (options.preset === "marker-highlight") {
        processedHtml = processedHtml.replace(
          /(<mark[^>]*?)style="background-color:[^;"]*(;[^"]*)?"/g,
          '$1style="$2"'
        );
      }

      // Use the new client-side rendering function
      const dataUrl = await createBeautifulTextImage(processedHtml, {
        theme: themeName,
        returnDataUrlOnly: true,
        maxLength: 200000,
      }).catch((err) => {
        console.error("[text-to-image] Failed to generate image:", {
          error: err,
          theme: themeName,
          htmlLength: processedHtml.length,
        });
        throw err;
      });

      if (!dataUrl) {
        const error = new Error(
          "No data URL returned from text-to-image",
        );
        console.error("[text-to-image] Empty response:", {
          theme: themeName,
          htmlLength: processedHtml.length,
        });
        throw error;
      }

      // Convert data URL to blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();

      return {
        blob,
        url: dataUrl,
        download: (filename: string) => {
          const a = document.createElement("a");
          a.href = dataUrl;
          a.download = filename;
          a.click();
        },
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      throw err;
    } finally {
      setIsGenerating(false);
    }
  };

  const generateSingleImage = async (
    html: string,
    preset: string,
  ): Promise<ImportedImageResult> => {
    const result = await generateImage(html, { preset: preset as "a4-poster" | "manifesto" | "book-excerpt" | "dark-mono-poster" | "highlighted-book" | "marker-highlight" });

    // Upload to x-image only if enabled (don't await to avoid blocking UI)
    if (uploadToXImage) {
      uploadXImage(result.blob, preset, html).catch((error) => {
        console.error(`Failed to upload ${preset} to x-image:`, error);
        // Don't throw - we don't want to break the user experience
      });
    }

    return {
      url: result.url,
      download: result.download,
    };
  };

  const generateImageVariants = async (
    html: string,
  ): Promise<ImageVariant[]> => {
    setIsGenerating(true);
    setError(null);

    try {
      // Define the presets we want to generate
      const presets = [
        {
          preset: "manifesto" as const,
          label: "Manifesto",
          description: "Manifesto",
          options: {},
        },
        {
          preset: "book-excerpt" as const,
          label: "Book Excerpt",
          description: "Classic book-style layout with serif fonts",
        },
        {
          preset: "dark-mono-poster" as const,
          label: "Dark Mode",
          description: "Mono style dark mode",
        },
        /*
        {
          preset: "highlighted-book" as const,
          label: "Highlighted Book", 
          description: "Book style with realistic highlighter effects",
          options: {
            backgroundImage: "https://pbs.twimg.com/media/Grhndq4XAAALjOq?format=jpg&name=large"
          }
        }
          */
      ];

      // Generate all variants
      const variants = await Promise.all(
        presets.map(async ({ preset, label, description, options }) => {
          const result = await generateImage(html, { preset, ...options });

          // Upload to x-image only if enabled (don't await to avoid blocking UI)
          if (uploadToXImage) {
            uploadXImage(result.blob, preset, html).catch((error) => {
              console.error(`Failed to upload ${preset} to x-image:`, error);
              // Don't throw - we don't want to break the user experience
            });
          }

          return {
            preset,
            url: result.url,
            download: result.download,
            label,
            description,
          };
        }),
      );

      return variants;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      throw err;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    actions: {
      generateImageVariants,
      generateImage: generateSingleImage,
    },
    isGenerating,
    error,
  };
}
