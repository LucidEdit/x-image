export interface ImageVariant {
  preset: string;
  url: string;
  download: (filename: string) => void;
  label: string;
  description: string;
}

export interface ImageResult {
  url: string;
  download: (filename: string) => void;
}

export interface ImageActions {
  generateImageVariants: (html: string) => Promise<ImageVariant[]>;
  generateImage: (html: string, preset: string) => Promise<ImageResult>;
}

export interface UseHtmlToImageOptions {
  uploadToXImage?: boolean;
}

export interface UseHtmlToImageReturn {
  actions: ImageActions;
  isGenerating: boolean;
  error: string | null;
}

export interface XImage {
  id: string;
  filename: string;
  preset: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface XImageFeedResponse {
  images: XImage[];
  hasMore: boolean;
  nextPage?: number;
}
