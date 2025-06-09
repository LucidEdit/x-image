"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Copy } from "lucide-react";
import { toast } from "sonner";
import { ImageVariant } from "@/types";
import { isMac, isSafari } from "@/lib/utils";
import { copyImageToClipboard } from "@/lib/clipboard";
import Image from "next/image";

interface ImagePreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageVariants?: ImageVariant[];
  title?: string;
  isGenerating?: boolean;
  // Single image mode props
  singleImageUrl?: string;
  singleImageFilename?: string;
}

interface ActionButtonsProps {
  onCopy: () => void;
  onDownload: () => void;
  onShare: () => void;
}

function ActionButtons({ onCopy, onDownload, onShare }: ActionButtonsProps) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={onCopy}>
        <Copy className="mr-1 size-4" />
        Copy
      </Button>
      <Button variant="outline" onClick={onDownload}>
        <Download className="mr-1 size-4" />
        Download
      </Button>
      <Button onClick={onShare}>
        <Image
          src="/images/twitter-x.svg"
          alt="X"
          width={16}
          height={16}
          className="mr-1 size-4 invert dark:invert-0"
        />
        Share
      </Button>
    </div>
  );
}

export function ImagePreviewDialog({
  open,
  onOpenChange,
  imageVariants = [],
  title,
  isGenerating = false,
  singleImageUrl,
  singleImageFilename,
}: ImagePreviewDialogProps) {
  const handleDownload = (variant: ImageVariant) => {
    variant.download(`${title || "document"}-${variant.preset}.png`);
    toast.success("Image downloaded", {
      description: `${variant.label} style has been saved`,
    });
  };

  const handleCopy = async (imageUrl: string) => {
    const result = await copyImageToClipboard(imageUrl);

    if (result.success) {
      toast.success("Image copied to clipboard", {
        description: "You can now paste it anywhere",
      });
    } else {
      toast.error("Copy failed", {
        description: result.error || "Please try again or use download instead",
      });
    }
  };

  const copyImageSilently = async (imageUrl: string) => {
    const result = await copyImageToClipboard(imageUrl);
    return result.success;
  };

  const handleShareToTwitter = async (imageUrl: string) => {
    // For Safari, pre-open popup to preserve user gesture
    // For Chrome/others, use original approach that works perfectly
    const popup = isSafari() ? window.open("", "_blank") : null;

    try {
      // Try to copy the image to clipboard first
      const copySuccess = await copyImageSilently(imageUrl);

      if (copySuccess) {
        // If copy succeeded, navigate popup to Twitter with paste instructions
        const pasteShortcut = isMac ? "⌘+V" : "Ctrl+V";
        const tweetText = encodeURIComponent(
          `📋 Paste your image here (${pasteShortcut}):`,
        );
        const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

        if (isSafari() && popup) {
          // Safari: navigate the pre-opened popup
          popup.location.href = twitterUrl;
        } else {
          // Chrome/others: use original working approach
          window.open(twitterUrl, "_blank");
        }

        toast.success("Image copied and Twitter opened", {
          description: "Paste the image in your tweet",
        });
      } else {
        // If copy failed, close popup and show error
        if (popup) {
          popup.close();
        }

        if (isSafari()) {
          toast.error("Share to X", {
            description:
              "Please download the image and upload it manually to X",
          });
        } else {
          toast.error("Share failed", {
            description: "Please try copying manually",
          });
        }
      }
    } catch (error) {
      // Close popup on error
      if (popup) {
        popup.close();
      }

      console.error("Share to Twitter failed:", error);
      toast.error("Share failed", {
        description: "Please try downloading the image instead",
      });
    }
  };

  const handleSingleImageDownload = () => {
    if (!singleImageUrl || !singleImageFilename) return;

    // Fetch the image as blob and create download link (same as existing variants)
    fetch(singleImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `community-image-${singleImageFilename}`;
        a.click();

        toast.success("Image downloaded", {
          description: "Community image has been saved",
        });
      })
      .catch((error) => {
        console.error("Download failed:", error);
        toast.error("Download failed", {
          description: "Please try again",
        });
      });
  };

  // Single image mode
  const isSingleImageMode = singleImageUrl && singleImageFilename;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[90vh] min-h-[400px] w-full max-w-[95vw] p-0 sm:min-h-[500px] sm:max-w-[600px]"
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex h-full max-h-[90vh] flex-col">
          <DialogHeader className="border-b px-6 py-4">
            <DialogTitle>
              {isSingleImageMode ? "Community Image" : "Choose Image Style"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6">
            {isSingleImageMode ? (
              <div className="flex min-h-[400px] items-center justify-center">
                <img
                  src={singleImageUrl}
                  alt="Community image"
                  className="max-h-[70vh] w-auto rounded-lg border shadow-sm"
                />
              </div>
            ) : isGenerating ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
                <Loader2 className="size-8 animate-spin" />
                <p className="text-muted-foreground text-sm">
                  Generating image variants...
                </p>
              </div>
            ) : imageVariants.length > 0 ? (
              <div className="space-y-8">
                {imageVariants.map((variant) => (
                  <div
                    key={variant.preset}
                    className="space-y-4 rounded-lg border p-6"
                  >
                    <div>
                      <h3 className="text-lg font-medium">{variant.label}</h3>
                      <p className="text-muted-foreground text-sm">
                        {variant.description}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <img
                        src={variant.url}
                        alt={`${variant.label} preview`}
                        className="max-h-[60vh] w-auto rounded-lg border shadow-sm"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <ActionButtons
                        onCopy={() => handleCopy(variant.url)}
                        onDownload={() => handleDownload(variant)}
                        onShare={() => handleShareToTwitter(variant.url)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {isSingleImageMode && (
            <DialogFooter className="border-t px-6 py-4">
              <ActionButtons
                onCopy={() => handleCopy(singleImageUrl!)}
                onDownload={handleSingleImageDownload}
                onShare={() => handleShareToTwitter(singleImageUrl!)}
              />
            </DialogFooter>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
