export const baseStyles = {
  resetStyles: `
    html, body {
      margin: 0;
      padding: 0;
      height: fit-content;
    }

    /* Tiptap base styles */
    strong {
      font-weight: bold;
    }

    em {
      font-style: italic;
    }

    u {
      text-decoration: underline;
    }

    s {
      text-decoration: line-through;
    }

    blockquote {
      margin-left: 1rem;
      padding-left: 1rem;
      border-left: 2px solid #ccc;
      font-style: italic;
      color: #666;
    }

    code {
      font-family: monospace;
      background-color: #f4f4f4;
      padding: 0.2em 0.4em;
      border-radius: 4px;
      font-size: 0.95em;
    }

    pre {
      background-color: #f4f4f4;
      padding: 1em;
      border-radius: 6px;
      overflow-x: auto;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      margin: 1em 0 0.5em;
    }

    ul, ol {
      margin-left: 1.5rem;
      padding-left: 1rem;
    }

    li {
      margin-bottom: 0.25em;
    }

    a {
      color: blue;
      text-decoration: underline;
    }

    p {
      margin: 0.5em 0;
    }
  `,

  fontFamilies: {
    libreBaskerville: "'Libre Baskerville', serif",
    playfairDisplay: "'Playfair Display', serif",
    inter: "'Inter', sans-serif",
  },
};
