import { Theme } from "../types";

export const manifesto: Theme = {
  name: "manifesto",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap",
  ],

  wrapperStyle: {
    width: "794px",
    height: "1123px",
    backgroundColor: "#f7f6f1",
    fontFamily: '"Inter", sans-serif',
    color: "#000",
    textAlign: "left",
    padding: "96px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "64px",
  },

  elementStyles: {
    img: {
      width: "220px",
      height: "auto",
      maxWidth: "100%",
    },

    p: {
      fontSize: "20px",
      lineHeight: "1.7",
      margin: "0 0 24px 0",
      width: "100%",
      maxWidth: "650px",
    },

    h1: {
      fontSize: "40px",
      fontWeight: "600",
      margin: "48px 0 24px 0",
      width: "100%",
      maxWidth: "650px",
    },
    h2: {
      fontSize: "32px",
      fontWeight: "600",
      margin: "40px 0 20px 0",
      width: "100%",
      maxWidth: "650px",
    },
    h3: {
      fontSize: "26px",
      fontWeight: "600",
      margin: "32px 0 16px 0",
      width: "100%",
      maxWidth: "650px",
    },
    h4: {
      fontSize: "22px",
      fontWeight: "600",
      margin: "24px 0 12px 0",
      width: "100%",
      maxWidth: "650px",
    },
    h5: {
      fontSize: "18px",
      fontWeight: "600",
      margin: "20px 0 12px 0",
      width: "100%",
      maxWidth: "650px",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "600",
      margin: "16px 0 8px 0",
      width: "100%",
      maxWidth: "650px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },

    strong: { fontWeight: "600" },
    em: { fontStyle: "italic" },
    u: { textDecoration: "underline" },
    s: { textDecoration: "line-through" },
    a: { color: "#2b6cb0", textDecoration: "underline" },

    ul: {
      margin: "0 0 24px 0",
      paddingLeft: "40px",
      fontSize: "20px",
      width: "100%",
      maxWidth: "650px",
      listStyleType: "disc",
    },
    ol: {
      margin: "0 0 24px 0",
      paddingLeft: "40px",
      fontSize: "20px",
      width: "100%",
      maxWidth: "650px",
      listStyleType: "decimal",
    },
    li: {
      marginBottom: "8px",
      fontSize: "20px",
    },

    blockquote: {
      margin: "0 0 24px 40px",
      paddingLeft: "20px",
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
      fontFamily: "monospace",
      backgroundColor: "#edf2f7",
      padding: "16px",
      borderRadius: "6px",
      overflowX: "auto",
      margin: "0 0 24px 0",
      width: "100%",
      maxWidth: "650px",
      fontSize: "16px",
    },

    hr: {
      width: "100%",
      maxWidth: "650px",
      border: "none",
      borderTop: "1px solid #ccc",
      margin: "32px 0",
    },

    table: {
      borderCollapse: "collapse",
      width: "100%",
      maxWidth: "650px",
      marginBottom: "24px",
      fontSize: "18px",
    },
    thead: {
      backgroundColor: "#eee",
    },
    th: {
      textAlign: "left",
      border: "1px solid #ddd",
      padding: "8px",
      fontWeight: "600",
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
    },
    tr: {
      borderBottom: "1px solid #ddd",
    },
  },
};
