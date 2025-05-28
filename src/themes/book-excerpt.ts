import { Theme } from "../types";

export const bookExcerptTheme: Theme = {
  name: "book-excerpt",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  ],
  wrapperStyle: {
    padding: "20px 40px 40px 40px",
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
    p: {
      fontSize: "24px",
      margin: "0 0 24px 0",
      fontFamily: '"Libre Baskerville", serif',
    },
    em: {
      fontStyle: "italic",
      fontFamily: '"Libre Baskerville", serif',
    },
    strong: {
      fontWeight: "700",
      fontFamily: '"Libre Baskerville", serif',
    },
    u: {
      textDecoration: "underline",
      fontFamily: '"Libre Baskerville", serif',
    },
    s: {
      textDecoration: "line-through",
      fontFamily: '"Libre Baskerville", serif',
    },
    blockquote: {
      marginLeft: "2rem",
      paddingLeft: "1.5rem",
      borderLeft: "3px solid #666",
      fontStyle: "italic",
      color: "#444",
      fontFamily: '"Libre Baskerville", serif',
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
    ul: {
      fontSize: "24px",
      marginLeft: "2rem",
      paddingLeft: "1rem",
      fontFamily: '"Libre Baskerville", serif',
      listStyleType: "disc",
    },
    ol: {
      fontSize: "24px",
      marginLeft: "2rem",
      paddingLeft: "1rem",
      fontFamily: '"Libre Baskerville", serif',
      listStyleType: "decimal",
    },
    li: {
      marginBottom: "0.5em",
      fontSize: "24px",
      fontFamily: '"Libre Baskerville", serif',
    },
    a: {
      color: "#1a0dab",
      textDecoration: "underline",
      fontFamily: '"Libre Baskerville", serif',
    },
    "p:last-child": {
      marginBottom: "0",
      fontFamily: '"Libre Baskerville", serif',
    },
  },
};
