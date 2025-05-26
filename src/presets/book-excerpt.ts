import type { RenderToImageOptions } from "../types";
import { baseStyles } from "./base-styles";

export const bookExcerptPreset = (
  options: Partial<RenderToImageOptions> = {}
): Partial<RenderToImageOptions> => ({
  width: 1000,
  height: 10,
  backgroundColor: "#fff",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  ],
  customCSS: `
    ${baseStyles.resetStyles}

    body {
        padding: 40px;
        font-family: ${baseStyles.fontFamilies.libreBaskerville};
        background: #fff;
        color: #222;
        text-align: left;
        line-height: 1.7;
        width: 920px;
        ${options.backgroundImage
          ? `
        background-image: url('${options.backgroundImage}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        `
          : ""
        }
    }

    p {
        font-size: 24px;
        margin: 0 0 24px 0;
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: 700;
    }

    p:last-child {
        margin-bottom: 0;
    }
  `,
}); 