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
    "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap",
  ],
  customCSS: `
    ${baseStyles.resetStyles}

    body {
        padding: 120px;
        font-family: 'Courier Prime', 'Courier New', monospace;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: #2a2a2a;
        line-height: 1.8;
        text-align: left;
        max-width: 560px;
        margin: 0 auto;
        min-height: calc(100vh - 240px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        font-family: 'Courier Prime', 'Courier New', monospace;
        font-size: 28px;
        font-weight: 700;
        margin: 0 0 12px 0;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    h2 {
        font-family: 'Courier Prime', 'Courier New', monospace;
        font-size: 24px;
        font-weight: 700;
        margin: 32px 0 16px 0;
        text-decoration: underline;
    }

    p {
        font-size: 16px;
        margin-bottom: 20px;
        text-align: justify;
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: 700;
    }

    .signature {
        margin-top: 60px;
        text-align: right;
        font-style: italic;
    }
  `,
}); 