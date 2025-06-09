import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isMac =
  typeof window !== "undefined" &&
  navigator.platform.toUpperCase().indexOf("MAC") >= 0;

// Blur the active element to prevent focus from being stuck in the editable text
// This is needed as we're revealing the edit buttons when group-focus-within is true
export function blurActiveElement() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}

export const isSafari = () => {
  if (typeof window === "undefined") return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const isClipboardApiSupported = () => {
  return (
    typeof window !== "undefined" &&
    "navigator" in window &&
    "clipboard" in navigator &&
    "write" in navigator.clipboard &&
    typeof ClipboardItem !== "undefined"
  );
};
