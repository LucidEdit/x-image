import { Theme } from "../types";

export const a4PosterTheme: Theme = {
  name: "a4-poster",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap",
  ],
  wrapperStyle: {
    width: "794px",
    height: "1123px",
    backgroundColor: "#f5f7fa",
    fontFamily: '"Inter", sans-serif',
    color: "#000",
    textAlign: "left",
    padding: "96px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  elementStyles: {
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "48px",
      fontWeight: "600",
      margin: "0 0 24px 0",
      width: "100%",
      maxWidth: "650px",
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "36px",
      fontWeight: "600",
      margin: "0 0 20px 0",
      width: "100%",
      maxWidth: "650px",
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "28px",
      fontWeight: "600",
      margin: "0 0 16px 0",
      width: "100%",
      maxWidth: "650px",
    },

    p: {
      fontSize: "18px",
      lineHeight: "1.75",
      margin: "0 0 16px 0",
      width: "100%",
      maxWidth: "650px",
    },

    em: { fontStyle: "italic" },
    strong: { fontWeight: "bold" },
    u: { textDecoration: "underline" },
    s: { textDecoration: "line-through" },

    blockquote: {
      margin: "0 0 16px 40px",
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
      backgroundColor: "#edf2f7",
      padding: "1.5em",
      borderRadius: "6px",
      overflowX: "auto",
      margin: "0 0 24px 0",
      width: "100%",
      maxWidth: "650px",
    },
    ul: {
      margin: "0 0 16px 0",
      paddingLeft: "40px",
      fontSize: "18px",
      width: "100%",
      maxWidth: "650px",
      listStyleType: "disc",
    },
    ol: {
      margin: "0 0 16px 0",
      paddingLeft: "40px",
      fontSize: "18px",
      width: "100%",
      maxWidth: "650px",
      listStyleType: "decimal",
    },
    li: {
      marginBottom: "8px",
      fontSize: "18px",
    },

    a: {
      fontSize: "18px",
      lineHeight: "1.75",
      margin: "0 0 16px 0",
      width: "100%",
      maxWidth: "650px",
      color: "#000",
      textDecoration: "underline",
      display: "block"
    },

    div: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "18px",
      fontWeight: "bold",
      letterSpacing: "2px",
      marginTop: "32px",
      width: "100%",
      maxWidth: "650px",
    },
  },
};
