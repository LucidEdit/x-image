"use client";

import React, { useState, useEffect } from "react";
import { useSimpleTiptapEditor } from "@/lib/hooks/use-simple-tiptap-editor";
import { SimpleEditor } from "./_components/simple-editor";
import { SimpleImageCTA } from "./_components/simple-image-cta";
import { PresetSelector } from "./_components/preset-selector";
import { CommunityFeed } from "./_components/community-feed";
import { ImagePreviewDialog } from "./_components/image-preview-dialog";
import { useHtmlToImage } from "@/lib/hooks/use-html-to-image";
import Image from "next/image";
import Link from "next/link";
import { isContentEmpty } from "./_components/tiptap-editor";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SimplePage() {
  const [content, setContent] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(
    null,
  );
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const { state: editorState } = useSimpleTiptapEditor({
    content,
    documentId: "simple-editor",
    onUpdate: setContent,
    editable: true,
    offline: true,
  });

  const { actions: imageActions, isGenerating } = useHtmlToImage({
    uploadToXImage: true,
  });

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
  };

  const handleImageRemove = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
      setUploadedImage(null);
    }
  };

  const handlePresetChange = (preset: string) => {
    setSelectedPreset(preset);
  };

  const handleGenerateImage = async () => {
    if (!editorState.editor || !selectedPreset || isGenerating) return;

    try {
      setShowImagePreview(true);
      setGeneratedImageUrl(null);

      let html = editorState.editor.getHTML();

      // For manifesto preset with uploaded image, prepend the image to the HTML
      if (selectedPreset === "manifesto" && uploadedImage) {
        const imageElement = `<img src="${uploadedImage}" alt="Header image" style="width: 100%; height: auto; margin-bottom: 20px;" />`;
        html = imageElement + html;
      }

      const result = await imageActions.generateImage(html, selectedPreset);
      setGeneratedImageUrl(result.url);
    } catch {
      setShowImagePreview(false);
      // Error is handled by the hook
    }
  };

  const handlePreviewClose = (open: boolean) => {
    if (!open) {
      setShowImagePreview(false);
      if (generatedImageUrl) {
        URL.revokeObjectURL(generatedImageUrl);
      }
      setGeneratedImageUrl(null);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage);
      }
    };
  }, [uploadedImage]);

  if (!editorState.editor) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-muted-foreground">Loading editor...</div>
      </div>
    );
  }

  const isEmpty = isContentEmpty(content);

  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-border/40 bg-background/80 border-b backdrop-blur-sm">
        <div className="mx-auto max-w-[1000px] p-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="https://getlucid.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/logotype_purple_main_black.svg"
                  alt="Lucid Logo"
                  width={160}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <div className="text-muted-foreground text-sm">Text to Image</div>
            </div>
            <Link
              href="https://getlucid.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="group border-[#7C3AED]/20 bg-gradient-to-r from-[#7C3AED]/5 to-[#5B21B6]/5 text-[#7C3AED] transition-all duration-300 hover:border-[#7C3AED]/40 hover:from-[#7C3AED]/10 hover:to-[#5B21B6]/10 hover:shadow-sm"
              >
                Try Lucid
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-[1000px] px-4 py-6 sm:px-8 lg:px-12">
          {/* Simple Editor */}
          <SimpleEditor editor={editorState.editor} />

          {/* Preset Selection */}
          <div className="mt-8">
            <PresetSelector
              selectedPreset={selectedPreset}
              onPresetChange={handlePresetChange}
              uploadedImage={uploadedImage}
              onImageUpload={handleImageUpload}
              onImageRemove={handleImageRemove}
            />
          </div>

          {/* Image Generation CTA */}
          <SimpleImageCTA
            onGenerate={handleGenerateImage}
            isGenerating={isGenerating}
            isDisabled={isEmpty}
            selectedPreset={selectedPreset}
          />

          {/* Image Preview Dialog */}
          <ImagePreviewDialog
            open={showImagePreview}
            onOpenChange={handlePreviewClose}
            singleImageUrl={generatedImageUrl || undefined}
            singleImageFilename={selectedPreset || "image"}
            isGenerating={isGenerating}
          />

          {/* Community Feed */}
          <div className="mt-12">
            <CommunityFeed />
          </div>
        </div>
      </main>

      {/* Dead footer for spacing */}
      <footer className="py-8" />
    </div>
  );
}
