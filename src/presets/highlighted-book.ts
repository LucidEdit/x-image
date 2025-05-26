import type { RenderToImageOptions } from "../types";
import { baseStyles } from "./base-styles";

export const highlightedBookPreset = (
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
        ${
          options.backgroundImage
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
        line-height: 1.7;
        margin: 0 0 24px 0;
    }

    /* -------- ultra‑realistic highlighter effect -------- */
    mark {
        background: none;
        position: relative;
        padding: 0 4px;
        margin: 0 -4px;
        z-index: 1;
    }

    /* base swatch of colour with gentle feathering */
    mark::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(255, 241, 118, 0.9);
        mix-blend-mode: multiply;
        filter: blur(1px);
        transform: rotate(-0.5deg);
        clip-path: polygon(
            0% 3%, 100% 0%, 99% 97%, 2% 100%
        );
        border-radius: 2px;
        z-index: -2;
    }

    /* lighter streak through the middle to mimic the marker nib */
    mark::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
            transparent 65%,
            rgba(255, 255, 255, 0.25) 65%,
            rgba(255, 255, 255, 0.25) 85%,
            transparent 85%
        );
        filter: blur(0.8px);
        transform: rotate(0.15deg);
        clip-path: polygon(
            0% 0%, 100% 2%, 98% 96%, 2% 98%
        );
        border-radius: 2px;
        z-index: -1;
        pointer-events: none;
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
