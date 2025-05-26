import type { RenderToImageOptions } from "../types";
import { baseStyles } from "./base-styles";

export const a4PosterPreset = (
  options: Partial<RenderToImageOptions> = {}
): Partial<RenderToImageOptions> => ({
  width: 794,
  height: 1123,
  backgroundColor: "#f5f7fa",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter&display=swap",
  ],
  customCSS: `
    ${baseStyles.resetStyles}

    body {
        padding: 80px;
        font-family: ${baseStyles.fontFamilies.inter};
        background: #f5f7fa;
        color: #000;
        max-width: 650px;
        margin: 0 auto;
        text-align: left;
    }

    h1 {
        font-family: ${baseStyles.fontFamilies.playfairDisplay};
        font-size: 52px;
        margin: 0 0 8px 0;
    }

    h2 {
        font-family: ${baseStyles.fontFamilies.playfairDisplay};
        font-size: 52px;
        font-style: italic;
        margin: 0 0 40px 0;
    }

    p {
        font-size: 20px;
        line-height: 1.75;
        margin-bottom: 24px;
    }

    em {
        font-style: italic;
    }

    .logo {
        font-family: ${baseStyles.fontFamilies.playfairDisplay};
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-top: 40px;
    }
  `,
}); 