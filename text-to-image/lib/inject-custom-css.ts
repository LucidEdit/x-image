export function injectCustomCSS(css: string): HTMLStyleElement {
    const styleTag = document.createElement("style");
    styleTag.setAttribute("data-injected-theme-css", "true");
    styleTag.textContent = css;
    document.head.appendChild(styleTag);
    return styleTag;
  }
  