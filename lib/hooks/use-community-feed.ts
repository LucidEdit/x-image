"use client";

import { useState, useEffect, useCallback } from "react";
import { XImage, XImageFeedResponse } from "@/types";

interface UseCommunityFeedReturn {
  images: XImage[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  refresh: () => void;
}

export function useCommunityFeed(): UseCommunityFeedReturn {
  const [images, setImages] = useState<XImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchImages = useCallback(async (page: number, reset = false) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/community-feed?page=${page}&limit=10`);

      if (!response.ok) {
        throw new Error("Failed to fetch community images");
      }

      const data: XImageFeedResponse = await response.json();

      setImages((prev) => {
        if (reset) {
          return data.images;
        }

        // Deduplicate images by ID to prevent duplicates
        const existingIds = new Set(prev.map((img) => img.id));
        const newImages = data.images.filter((img) => !existingIds.has(img.id));

        return [...prev, ...newImages];
      });
      setHasMore(data.hasMore);
      setCurrentPage(page);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      fetchImages(currentPage + 1);
    }
  }, [fetchImages, currentPage, isLoading, hasMore]);

  const refresh = useCallback(() => {
    setImages([]);
    setCurrentPage(1);
    setHasMore(true);
    fetchImages(1, true);
  }, [fetchImages]);

  // Initial load
  useEffect(() => {
    fetchImages(1, true);
  }, [fetchImages]);

  return {
    images,
    isLoading,
    error,
    hasMore,
    loadMore,
    refresh,
  };
}
