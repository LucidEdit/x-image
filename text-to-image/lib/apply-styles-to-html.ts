import { Theme } from "../types";

export function applyStylesToHTML(rawHtml: string, theme: Theme): HTMLElement {
  const wrapper = document.createElement("div");
  Object.assign(wrapper.style, theme.wrapperStyle);

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = rawHtml;

  Array.from(tempContainer.children).forEach((child) => {
    const tagName = child.tagName.toLowerCase();
    const styles = theme.elementStyles?.[tagName];
    if (styles) {
      Object.assign((child as HTMLElement).style, styles);
    }
    wrapper.appendChild(child);
  });

  return wrapper;
}
