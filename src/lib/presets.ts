import type { RenderToImageOptions } from "../types";

export function applyPreset(preset?: string, options: Partial<RenderToImageOptions> = {}): Partial<RenderToImageOptions> {
  switch (preset) {
    case "book-excerpt":
      return {
        width: 1000,
        height: 10,
        backgroundColor: "#fff",
        fontLinks: [
          "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
        ],
        customCSS: `
  html, body {
    margin: 0;
    padding: 0;
    height: fit-content;
  }

  body {
    padding: 40px;
    font-family: 'Libre Baskerville', serif;
    background: #fff;
    color: #222;
    text-align: left;
    line-height: 1.7;
    width: 920px;
    ${options.backgroundImage ? `
    background-image: url('${options.backgroundImage}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    ` : ''}
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
      };

    case "a4-poster":
      return {
        width: 794,
        height: 1123,
        backgroundColor: "#f5f7fa",
        fontLinks: [
          "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter&display=swap",
        ],
        customCSS: `
  body {
    padding: 80px;
    font-family: 'Inter', sans-serif;
    background: #f5f7fa;
    color: #000;
    max-width: 650px;
    margin: 0 auto;
    text-align: left;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 52px;
    margin: 0 0 8px 0;
  }

  h2 {
    font-family: 'Playfair Display', serif;
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
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 40px;
  }
`,
      };

    case "ugly-debug":
      return {
        backgroundColor: "#ff00ff",
        customCSS: "* { outline: 1px solid red; }",
      };
    default:
      return {};
  }
}
