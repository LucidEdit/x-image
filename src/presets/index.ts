import type { RenderToImageOptions } from "../types";
import { bookExcerptPreset } from "./book-excerpt";
import { a4PosterPreset } from "./a4-poster";
import { highlightedBookPreset } from "./highlighted-book";
import { typewrittenPagePreset } from "./typewritten-page";

export function applyPreset(
  preset?: string,
  options: Partial<RenderToImageOptions> = {}
): Partial<RenderToImageOptions> {
  switch (preset) {
    case "book-excerpt":
      return bookExcerptPreset(options);
    case "a4-poster":
      return a4PosterPreset(options);
    case "highlighted-book":
      return highlightedBookPreset(options);
    case "typewritten-page":
      return typewrittenPagePreset(options);
    default:
      return {};
  }
}

export * from "./book-excerpt";
export * from "./a4-poster";
export * from "./highlighted-book";
export * from "./typewritten-page";
