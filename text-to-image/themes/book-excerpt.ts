import { Theme } from "../types";
import { registerTheme } from "./registry";

export const bookExcerptTheme: Theme = {
  name: "book-excerpt",
  label: "Book Excerpt",
  description: "Classic book-style",
  icon: "BookOpen",
  backgroundImage:
    "https://knloimxfzjvgwpztdaci.supabase.co/storage/v1/object/public/x-image-bg//2caf27eddbf639b18156de8e2e7fd38f.jpg",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  ],
  wrapperStyle: {
    width: "900px",
    padding: "60px 80px",
    backgroundColor: "#fefefe",
    backgroundImage:
      'url("https://knloimxfzjvgwpztdaci.supabase.co/storage/v1/object/public/x-image-bg//Grhndq3WcAAkAec.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: '"Libre Baskerville", serif',
    color: "#1a1a1a",
    textAlign: "left",
    lineHeight: "1.6",
    boxSizing: "border-box",
    boxShadow: "inset 0 0 50px rgba(0,0,0,0.05)",
  },
  elementStyles: {
    h1: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "46px",
      fontWeight: "700",
      margin: "0 0 32px 0",
      color: "#111",
      letterSpacing: "-0.5px",
    },
    "h1:last-child": {
      marginBottom: "0",
    },
    h2: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "40px",
      fontWeight: "700",
      margin: "0 0 28px 0",
      color: "#111",
      letterSpacing: "-0.3px",
    },
    "h2:last-child": {
      marginBottom: "0",
    },
    h3: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "34px",
      fontWeight: "700",
      margin: "0 0 24px 0",
      color: "#111",
      letterSpacing: "-0.2px",
    },
    "h3:last-child": {
      marginBottom: "0",
    },
    p: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "26px",
      fontWeight: "400",
      margin: "0 0 18px 0",
      color: "#1a1a1a",
    },
    em: {
      fontStyle: "italic",
      color: "#111",
    },
    strong: {
      fontWeight: "700",
      color: "#111",
    },
    u: { textDecoration: "underline" },
    s: { textDecoration: "line-through" },
    blockquote: {
      margin: "0 0 24px 0",
      padding: "20px 30px",
      borderLeft: "4px solid #333",
      fontStyle: "italic",
      color: "#222",
      fontFamily: '"Libre Baskerville", serif',
      backgroundColor: "rgba(0,0,0,0.02)",
      fontSize: "24px",
      lineHeight: "1.7",
    },
    "blockquote:last-child": {
      marginBottom: "0",
    },
    code: {
      fontFamily: "monospace",
      backgroundColor: "rgba(0,0,0,0.08)",
      color: "#333",
      padding: "0.2em 0.4em",
      borderRadius: "3px",
      fontSize: "0.9em",
    },
    pre: {
      backgroundColor: "rgba(0,0,0,0.05)",
      padding: "1.5em",
      borderRadius: "4px",
      overflowX: "auto",
      margin: "0 0 24px 0",
      border: "1px solid rgba(0,0,0,0.1)",
    },
    "pre:last-child": {
      marginBottom: "0",
    },
    ul: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "26px",
      fontWeight: "400",
      margin: "0 0 24px 0",
      paddingLeft: "30px",
      listStyleType: "disc",
      color: "#1a1a1a",
    },
    "ul:last-child": {
      marginBottom: "0",
    },
    ol: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "26px",
      fontWeight: "400",
      margin: "0 0 24px 0",
      paddingLeft: "30px",
      listStyleType: "decimal",
      color: "#1a1a1a",
    },
    "ol:last-child": {
      marginBottom: "0",
    },
    li: {
      marginBottom: "10px",
      fontSize: "26px",
      fontWeight: "400",
      lineHeight: "1.6",
    },
    "li:last-child": {
      marginBottom: "0",
    },
    a: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: "26px",
      fontWeight: "400",
      margin: "0 0 10px 0",
      color: "#1a1a1a !important",
      textDecoration: "underline",
      display: "block",
    },
  },
};

registerTheme(bookExcerptTheme);
