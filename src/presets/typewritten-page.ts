import type { RenderToImageOptions } from "../types";
import { baseStyles } from "./base-styles";

export const typewrittenPagePreset = (
  options: Partial<RenderToImageOptions> = {}
): Partial<RenderToImageOptions> => ({
  width: 800,
  height: 1000,
  backgroundColor: "#f8f6f0",
  backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=1600&fit=crop&auto=format&q=80",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;700&display=swap",
  ],
  customCSS: `
    ${baseStyles.resetStyles}

    body {
        padding: 120px;
        font-family: ${baseStyles.fontFamilies.inter};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: #2a2a2a;
        text-align: left;
        max-width: 560px;
        margin: 0 auto;
        min-height: calc(100vh - 240px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        font-family: ${baseStyles.fontFamilies.playfairDisplay};
        font-size: 72px;
        margin: 0 0 8px 0;
        text-align: center;
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
        margin-bottom: 8px;
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: 700;
    }

    a {
        color: #2a2a2a;
    }

    .signature {
        margin-top: 60px;
        text-align: right;
        font-style: italic;
    }
  `,
}); 