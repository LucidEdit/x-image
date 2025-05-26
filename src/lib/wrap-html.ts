import type { RenderToImageOptions } from "../types";

export function wrapHtml(
  body: string,
  options: Partial<RenderToImageOptions> = {}
): string {
  const {
    fontLinks = [],
    customCSS = "",
    backgroundColor = "#ffffff",
    backgroundImage,
    transparent = false,
  } = options;

  const fonts = fontLinks
    .map((link) => `<link href="${link}" rel="stylesheet">`)
    .join("\n");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        ${fonts}
        <style>
          body {
            margin: 0;
            background: ${transparent ? "transparent" : backgroundColor};
            ${
              backgroundImage
                ? `background-image: url('${backgroundImage}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;`
                : ""
            }
          }
          ${customCSS}
        </style>
      </head>
      <body>
        ${body}
      </body>
    </html>
  `;
}
