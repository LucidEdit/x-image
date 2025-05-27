// themes.ts
import { Theme } from "./types";

export const themes: Theme[] = [
  {
    name: "light",
    wrapperStyle: {
      padding: "2rem",
      backgroundColor: "#ffffff",
      fontFamily: "Arial, sans-serif",
      color: "#000000",
    },
    elementStyles: {
      h1: { fontSize: "32px", fontWeight: "bold", margin: "1rem 0" },
      h2: { fontSize: "28px", fontWeight: "600", margin: "1em 0 0.5em" },
      h3: { fontSize: "24px", fontWeight: "600", margin: "1em 0 0.5em" },
      h4: { fontSize: "20px", fontWeight: "600", margin: "1em 0 0.5em" },
      h5: { fontSize: "18px", fontWeight: "600", margin: "1em 0 0.5em" },
      h6: { fontSize: "16px", fontWeight: "600", margin: "1em 0 0.5em" },
      p: { fontSize: "16px", margin: "0.5em 0" },
      strong: { fontWeight: "bold" },
      em: { fontStyle: "italic" },
      u: { textDecoration: "underline" },
      s: { textDecoration: "line-through" },
      blockquote: {
        marginLeft: "1rem",
        paddingLeft: "1rem",
        borderLeft: "2px solid #ccc",
        fontStyle: "italic",
        color: "#666",
      },
      code: {
        fontFamily: "monospace",
        backgroundColor: "#f4f4f4",
        padding: "0.2em 0.4em",
        borderRadius: "4px",
        fontSize: "0.95em",
      },
      pre: {
        backgroundColor: "#f4f4f4",
        padding: "1em",
        borderRadius: "6px",
        overflowX: "auto",
      },
      ul: { marginLeft: "1.5rem", paddingLeft: "1rem" },
      ol: { marginLeft: "1.5rem", paddingLeft: "1rem" },
      li: { marginBottom: "0.25em" },
      a: { color: "blue", textDecoration: "underline" },
    },
  },
  {
    name: "dark",
    wrapperStyle: {
      padding: "2rem",
      backgroundColor: "#111827",
      fontFamily: "Arial, sans-serif",
      color: "#f9fafb",
    },
    elementStyles: {
      h1: {
        fontSize: "32px",
        fontWeight: "bold",
        margin: "1rem 0",
        color: "#facc15",
      },
      h2: {
        fontSize: "28px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        color: "#facc15",
      },
      h3: {
        fontSize: "24px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        color: "#facc15",
      },
      h4: {
        fontSize: "20px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        color: "#facc15",
      },
      h5: {
        fontSize: "18px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        color: "#facc15",
      },
      h6: {
        fontSize: "16px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        color: "#facc15",
      },
      p: { fontSize: "16px", margin: "0.5em 0", color: "#d1d5db" },
      strong: { fontWeight: "bold" },
      em: { fontStyle: "italic" },
      u: { textDecoration: "underline" },
      s: { textDecoration: "line-through" },
      blockquote: {
        marginLeft: "1rem",
        paddingLeft: "1rem",
        borderLeft: "2px solid #4b5563",
        fontStyle: "italic",
        color: "#9ca3af",
      },
      code: {
        fontFamily: "monospace",
        backgroundColor: "#1f2937",
        padding: "0.2em 0.4em",
        borderRadius: "4px",
        fontSize: "0.95em",
      },
      pre: {
        backgroundColor: "#1f2937",
        padding: "1em",
        borderRadius: "6px",
        overflowX: "auto",
      },
      ul: { marginLeft: "1.5rem", paddingLeft: "1rem" },
      ol: { marginLeft: "1.5rem", paddingLeft: "1rem" },
      li: { marginBottom: "0.25em" },
      a: { color: "#60a5fa", textDecoration: "underline" },
    },
  },
  {
    name: "retro",
    wrapperStyle: {
      padding: "2rem",
      backgroundColor: "#fef3c7",
      fontFamily: '"Courier New", Courier, monospace',
      color: "#7c3aed",
    },
    elementStyles: {
      h1: {
        fontSize: "28px",
        fontWeight: "bold",
        margin: "1rem 0",
        textDecoration: "underline",
      },
      h2: {
        fontSize: "24px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        textDecoration: "underline",
      },
      h3: {
        fontSize: "22px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        textDecoration: "underline",
      },
      h4: { fontSize: "20px", fontWeight: "600", margin: "1em 0 0.5em" },
      h5: { fontSize: "18px", fontWeight: "600", margin: "1em 0 0.5em" },
      h6: { fontSize: "16px", fontWeight: "600", margin: "1em 0 0.5em" },
      p: { fontSize: "14px", margin: "0.5em 0" },
      strong: { fontWeight: "bold" },
      em: { fontStyle: "italic" },
      u: { textDecoration: "underline" },
      s: { textDecoration: "line-through" },
      blockquote: {
        marginLeft: "1rem",
        paddingLeft: "1rem",
        borderLeft: "2px solid #7c3aed",
        fontStyle: "italic",
        color: "#6b21a8",
      },
      code: {
        fontFamily: "monospace",
        backgroundColor: "#fef9c3",
        padding: "0.2em 0.4em",
        borderRadius: "4px",
        fontSize: "0.95em",
      },
      pre: {
        backgroundColor: "#fef9c3",
        padding: "1em",
        borderRadius: "6px",
        overflowX: "auto",
      },
      ul: { marginLeft: "1.5rem", paddingLeft: "1rem" },
      ol: { marginLeft: "1.5rem", paddingLeft: "1rem" },
      li: { marginBottom: "0.25em" },
      a: { color: "#6d28d9", textDecoration: "underline" },
    },
  },
  {
    name: "book-excerpt",
    wrapperStyle: {
      padding: "40px",
      backgroundColor: "#fff",
      fontFamily: '"Libre Baskerville", serif',
      color: "#222",
      textAlign: "left",
      lineHeight: "1.7",
      width: "900px",
      backgroundImage:
        'url("https://pbs.twimg.com/media/Grhndq3WcAAkAec?format=jpg&name=large")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    elementStyles: {
      h1: {
        fontSize: "36px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h2: {
        fontSize: "32px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h3: {
        fontSize: "28px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h4: {
        fontSize: "24px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h5: {
        fontSize: "20px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h6: {
        fontSize: "18px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      p: { fontSize: "24px", margin: "0 0 24px 0" },
      em: { fontStyle: "italic" },
      strong: { fontWeight: "700" },
      u: { textDecoration: "underline" },
      s: { textDecoration: "line-through" },
      blockquote: {
        marginLeft: "2rem",
        paddingLeft: "1.5rem",
        borderLeft: "3px solid #666",
        fontStyle: "italic",
        color: "#444",
      },
      code: {
        fontFamily: "monospace",
        backgroundColor: "rgba(244, 244, 244, 0.8)",
        padding: "0.2em 0.4em",
        borderRadius: "4px",
        fontSize: "0.95em",
      },
      pre: {
        backgroundColor: "rgba(244, 244, 244, 0.8)",
        padding: "1.5em",
        borderRadius: "6px",
        overflowX: "auto",
      },
      ul: { marginLeft: "2rem", paddingLeft: "1rem" },
      ol: { marginLeft: "2rem", paddingLeft: "1rem" },
      li: { marginBottom: "0.5em" },
      a: { color: "#1a0dab", textDecoration: "underline" },
      "p:last-child": { marginBottom: "0" },
    },
  },
  {
    name: "a4-poster",
    wrapperStyle: {
      width: "794px",
      height: "1123px",
      backgroundColor: "#f5f7fa",
      fontFamily: '"Inter", sans-serif',
      color: "#000",
      textAlign: "left",
      padding: "80px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    elementStyles: {
      h1: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "52px",
        fontWeight: "600",
        margin: "0 0 8px 0",
        width: "100%",
        maxWidth: "650px",
      },
      h2: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "52px",
        fontStyle: "italic",
        fontWeight: "600",
        margin: "0 0 40px 0",
        width: "100%",
        maxWidth: "650px",
      },
      h3: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "36px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        width: "100%",
        maxWidth: "650px",
      },
      h4: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "32px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        width: "100%",
        maxWidth: "650px",
      },
      h5: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "28px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        width: "100%",
        maxWidth: "650px",
      },
      h6: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "24px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        width: "100%",
        maxWidth: "650px",
      },
      p: {
        fontSize: "20px",
        lineHeight: "1.75",
        marginBottom: "24px",
        width: "100%",
        maxWidth: "650px",
      },
      em: { fontStyle: "italic" },
      strong: { fontWeight: "bold" },
      u: { textDecoration: "underline" },
      s: { textDecoration: "line-through" },
      blockquote: {
        marginLeft: "2rem",
        paddingLeft: "1.5rem",
        borderLeft: "3px solid #000",
        fontStyle: "italic",
        color: "#333",
        width: "100%",
        maxWidth: "650px",
      },
      code: {
        fontFamily: "monospace",
        backgroundColor: "#edf2f7",
        padding: "0.2em 0.4em",
        borderRadius: "4px",
        fontSize: "0.95em",
      },
      pre: {
        backgroundColor: "#edf2f7",
        padding: "1.5em",
        borderRadius: "6px",
        overflowX: "auto",
        width: "100%",
        maxWidth: "650px",
      },
      ul: {
        marginLeft: "1.5rem",
        paddingLeft: "1rem",
        width: "100%",
        maxWidth: "650px",
      },
      ol: {
        marginLeft: "1.5rem",
        paddingLeft: "1rem",
        width: "100%",
        maxWidth: "650px",
      },
      li: { marginBottom: "0.5em" },
      a: { color: "#2b6cb0", textDecoration: "underline" },
      div: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "20px",
        fontWeight: "bold",
        letterSpacing: "2px",
        marginTop: "40px",
        width: "100%",
        maxWidth: "650px",
      },
    },
  },
  {
    name: "highlighted-book",
    wrapperStyle: {
      width: "1000px",
      minHeight: "10px",
      padding: "40px",
      backgroundColor: "#ffffff",
      backgroundImage:
        'url("https://pbs.twimg.com/media/Grhndq3WcAAkAec?format=jpg&name=large")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      fontFamily: '"Libre Baskerville", serif',
      color: "#222",
      textAlign: "left",
      lineHeight: "1.7",
      boxSizing: "border-box",
    },
    elementStyles: {
      h1: {
        fontSize: "36px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h2: {
        fontSize: "32px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h3: {
        fontSize: "28px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h4: {
        fontSize: "24px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h5: {
        fontSize: "20px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      h6: {
        fontSize: "18px",
        fontWeight: "600",
        margin: "1em 0 0.5em",
        fontFamily: '"Libre Baskerville", serif',
      },
      p: { fontSize: "24px", lineHeight: "1.7", margin: "0 0 24px 0" },
      em: { fontStyle: "italic" },
      strong: { fontWeight: "700" },
      u: { textDecoration: "underline" },
      s: { textDecoration: "line-through" },
      blockquote: {
        marginLeft: "2rem",
        paddingLeft: "1.5rem",
        borderLeft: "3px solid #666",
        fontStyle: "italic",
        color: "#444",
      },
      code: {
        fontFamily: "monospace",
        backgroundColor: "rgba(244, 244, 244, 0.8)",
        padding: "0.2em 0.4em",
        borderRadius: "4px",
        fontSize: "0.95em",
      },
      pre: {
        backgroundColor: "rgba(244, 244, 244, 0.8)",
        padding: "1.5em",
        borderRadius: "6px",
        overflowX: "auto",
      },
      ul: { marginLeft: "2rem", paddingLeft: "1rem" },
      ol: { marginLeft: "2rem", paddingLeft: "1rem" },
      li: { marginBottom: "0.5em" },
      a: { color: "#1a0dab", textDecoration: "underline" },
      "p:last-child": { marginBottom: "0" },
      mark: {
        background: "none",
        position: "relative",
        padding: "0 4px",
        margin: "0 -4px",
        zIndex: "1",
      },
      customCSS: `
        mark {
          background: none;
          position: relative;
          padding: 0 4px;
          margin: 0 -4px;
          z-index: 1;
        }

        mark::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 241, 118, 0.9);
          mix-blend-mode: multiply;
          filter: blur(1px);
          transform: rotate(-0.5deg);
          clip-path: polygon(0% 3%, 100% 0%, 99% 97%, 2% 100%);
          border-radius: 2px;
          z-index: -2;
        }

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
          clip-path: polygon(0% 0%, 100% 2%, 98% 96%, 2% 98%);
          border-radius: 2px;
          z-index: -1;
          pointer-events: none;
        }
      `,
    },
  },
];
