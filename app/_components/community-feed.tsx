"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import { useCommunityFeed } from "@/lib/hooks/use-community-feed";
import { XImage } from "@/types";
import { ImagePreviewDialog } from "@/app/_components/image-preview-dialog";

interface CommunityFeedProps {
  className?: string;
}

function FeedImage({ image, onClick }: { image: XImage; onClick: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Don't render anything if image failed to load
  if (hasError) {
    return null;
  }

  return (
    <div
      className="bg-card group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
      onClick={onClick}
    >
      <div className="p-4">
        {isLoading && <Skeleton className="aspect-[16/4] w-full rounded-lg" />}
        <img
          src={image.url}
          alt="Community image"
          className={`w-full rounded-lg object-cover shadow-sm transition-all duration-300 group-hover:scale-105 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
    </div>
  );
}

function distributeImages(images: XImage[]) {
  const leftColumn: XImage[] = [];
  const rightColumn: XImage[] = [];

  images.forEach((image, index) => {
    if (index % 2 === 0) {
      leftColumn.push(image);
    } else {
      rightColumn.push(image);
    }
  });

  return { leftColumn, rightColumn };
}

export function CommunityFeed({ className }: CommunityFeedProps) {
  const { images, isLoading, error, hasMore, loadMore } = useCommunityFeed();
  const [selectedImage, setSelectedImage] = useState<XImage | null>(null);
  const [showImageViewer, setShowImageViewer] = useState(false);

  const handleImageClick = (image: XImage) => {
    setSelectedImage(image);
    setShowImageViewer(true);
  };

  const handleViewerClose = (open: boolean) => {
    if (!open) {
      setShowImageViewer(false);
      setSelectedImage(null);
    }
  };

  if (error) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="text-center">
          <h2 className="text-xl font-semibold">Community Gallery</h2>
        </div>
        <div className="flex items-center justify-center rounded-lg border border-dashed p-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              Failed to load community images
            </p>
            <p className="text-muted-foreground text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-xl font-semibold">Community Gallery</h2>
      </div>

      {images.length === 0 && isLoading ? (
        <div className="flex items-center justify-center rounded-lg border border-dashed p-8">
          <div className="text-center">
            <Loader2 className="text-muted-foreground mx-auto size-8 animate-spin" />
            <p className="text-muted-foreground mt-2">
              Loading community images...
            </p>
          </div>
        </div>
      ) : images.length === 0 ? (
        <div className="flex items-center justify-center rounded-lg border border-dashed p-8">
          <div className="text-center">
            <p className="text-muted-foreground">No community images yet</p>
            <p className="text-muted-foreground text-sm">
              Be the first to create and share a beautiful image!
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex gap-4">
            {/* Left Column */}
            <div className="flex-1 space-y-4">
              {distributeImages(images).leftColumn.map((image, index) => (
                <FeedImage
                  key={`${image.filename}-${index}`}
                  image={image}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-4">
              {distributeImages(images).rightColumn.map((image, index) => (
                <FeedImage
                  key={`${image.filename}-${index}`}
                  image={image}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>

          {hasMore && (
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isLoading}
                className="min-w-[120px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Load More"
                )}
              </Button>
            </div>
          )}
        </>
      )}

      <ImagePreviewDialog
        open={showImageViewer}
        onOpenChange={handleViewerClose}
        singleImageUrl={selectedImage?.url}
        singleImageFilename={selectedImage?.filename}
      />
    </div>
  );
}
