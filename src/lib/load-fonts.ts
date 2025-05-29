export async function loadFonts(fontLinks: string[] = []): Promise<void> {
  const cssPromises = fontLinks.map(async (link) => {
    const response = await fetch(link);
    const css = await response.text();
    return css;
  });

  try {
    const cssContents = await Promise.all(cssPromises);

    const combinedCSS = cssContents.join("\n");
    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-injected-fonts", "true");
    styleElement.textContent = combinedCSS;
    document.head.appendChild(styleElement);

    await new Promise((resolve) => setTimeout(resolve, 100));
  } catch (error) {
    console.warn("Failed to load fonts:", error);
  }
} 