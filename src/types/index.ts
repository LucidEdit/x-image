export interface RenderToImageOptions {
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
  preset?: "a4-poster" | "tweet" | "ugly-debug" | "book-excerpt" | "highlighted-book";
}
