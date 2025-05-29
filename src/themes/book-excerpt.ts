import { Theme } from "../types";

export const bookExcerptTheme: Theme = {
  name: "book-excerpt",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  ],
  wrapperStyle: {
    width: "900px",
    padding: "60px 80px",
    backgroundColor: "#fff",
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
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "40px",
      fontWeight: "600",
      margin: "0 0 28px 0",
    },
    "h1:last-child": {
      marginBottom: "0",
    },
    h2: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "34px",
      fontWeight: "600",
      margin: "0 0 24px 0",
    },
    "h2:last-child": {
      marginBottom: "0",
    },
    h3: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "28px",
      fontWeight: "600",
      margin: "0 0 20px 0",
    },
    "h3:last-child": {
      marginBottom: "0",
    },
    p: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "22px",
      fontWeight: "500",
      margin: "0 0 10px 0",
    },
    "p:last-child": {
      marginBottom: "0",
    },
    em: { fontStyle: "italic" },
    strong: { fontWeight: "700" },
    u: { textDecoration: "underline" },
    s: { textDecoration: "line-through" },
    blockquote: {
      margin: "0 0 20px 40px",
      paddingLeft: "20px",
      borderLeft: "3px solid #666",
      fontStyle: "italic",
      color: "#444",
      fontFamily: '"Libre Baskerville", serif',
    },
    "blockquote:last-child": {
      marginBottom: "0",
    },
    code: {
      fontFamily: "monospace",
      backgroundColor: "rgba(244,244,244,0.8)",
      padding: "0.2em 0.4em",
      borderRadius: "4px",
      fontSize: "0.9em",
    },
    pre: {
      backgroundColor: "rgba(244,244,244,0.8)",
      padding: "1.5em",
      borderRadius: "6px",
      overflowX: "auto",
      margin: "0 0 24px 0",
    },
    "pre:last-child": {
      marginBottom: "0",
    },
    ul: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "22px",
      fontWeight: "500",
      margin: "0 0 20px 40px",
      paddingLeft: "20px",
      listStyleType: "disc",
    },
    "ul:last-child": {
      marginBottom: "0",
    },
    ol: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "22px",
      fontWeight: "500",
      margin: "0 0 20px 40px",
      paddingLeft: "20px",
      listStyleType: "decimal",
    },
    "ol:last-child": {
      marginBottom: "0",
    },
    li: {
      marginBottom: "8px",
      fontSize: "22px",
      fontWeight: "500",
    },
    "li:last-child": {
      marginBottom: "0",
    },
    a: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "22px",
      fontWeight: "500",
      margin: "0 0 10px 0",
      color: "#222 !important",
      textDecoration: "underline",
    },
  },
};
