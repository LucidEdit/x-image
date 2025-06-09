"use client";

import { isSafari, isClipboardApiSupported } from "@/lib/utils";

export interface ClipboardResult {
  success: boolean;
  error?: string;
}

export async function copyImageToClipboard(
  imageUrl: string,
): Promise<ClipboardResult> {
  try {
    // Check if clipboard API is supported
    if (!isClipboardApiSupported()) {
      return {
        success: false,
        error: "Clipboard API not supported in this browser",
      };
    }

    if (isSafari()) {
      // Safari-optimized approach using Promise-based ClipboardItem
      const item = new ClipboardItem({
        "image/png": fetch(imageUrl)
          .then((response) => response.blob())
          .then((blob) => {
            // Ensure it's a PNG for maximum Safari compatibility
            if (blob.type !== "image/png") {
              return convertBlobToPng(blob);
            }
            return blob;
          }),
      });

      await navigator.clipboard.write([item]);
    } else {
      // Standard approach for Chrome/Firefox
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
    }

    return { success: true };
  } catch (error) {
    console.error("Copy to clipboard failed:", error);

    // Provide specific error messages for common Safari issues
    if (isSafari() && error instanceof DOMException) {
      if (error.name === "NotAllowedError") {
        return {
          success: false,
          error:
            "Clipboard access denied. Please try again right after clicking the button.",
        };
      }
    }

    return {
      success: false,
      error: "Failed to copy image to clipboard",
    };
  }
}

// Helper function to convert blob to PNG if needed
async function convertBlobToPng(blob: Blob): Promise<Blob> {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      canvas.toBlob((pngBlob) => {
        resolve(pngBlob || blob);
      }, "image/png");
    };

    img.onerror = () => resolve(blob);
    img.src = URL.createObjectURL(blob);
  });
}
