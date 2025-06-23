import { Theme } from "../types";
import { registerTheme } from "./registry";

export const soloWantedForest: Theme = {
  name: "soloWantedForest",
  label: "Beige Green",
  description: "Clay background with evergreen type",
  icon: "Leaf",
  backgroundImage:
    "https://i.pinimg.com/736x/37/02/65/370265ace16275053c7df66c1c03ac70.jpg",

  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap",
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,800&display=swap",
  ],

  wrapperStyle: {
    width: "794px",
    backgroundColor: "#e9e6df",
    fontFamily: '"Inter", sans-serif',
    color: "#113d29",
    textAlign: "left",

    padding: "120px 60px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "16px",
  },

  elementStyles: {
    h1: {
      fontSize: "76px",
      fontWeight: "800",
      fontStyle: "italic",
      fontFamily: '"Playfair Display", serif',
      margin: "0 0 8px 0",
      width: "100%",
      maxWidth: "720px",
      textAlign: "center",
      lineHeight: "1.05",
      color: "#113d29",
    },

    p: {
      fontSize: "22px",
      lineHeight: "1.4",
      margin: "0 0 6px 0",
      width: "100%",
      maxWidth: "720px",
    },
    "p:last-child": { marginBottom: "0" },

    strong: { fontWeight: "800", color: "#113d29" },
    em: { fontStyle: "italic" },
    u: { textDecoration: "underline" },
    s: { textDecoration: "line-through" },

    a: {
      fontSize: "22px",
      lineHeight: "1.4",
      color: "#113d29",
      textDecoration: "underline",
      margin: "0 0 6px 0",
      width: "100%",
      maxWidth: "720px",
      display: "block",
      fontWeight: "800",
    },

    ul: {
      margin: "0 0 6px 0",
      paddingLeft: "28px",
      fontSize: "22px",
      width: "100%",
      maxWidth: "720px",
      listStyleType: "disc",
    },
    ol: {
      margin: "0 0 6px 0",
      paddingLeft: "28px",
      fontSize: "22px",
      width: "100%",
      maxWidth: "720px",
      listStyleType: "decimal",
    },
    li: { marginBottom: "2px", fontSize: "22px" },

    blockquote: {
      margin: "0 0 6px 30px",
      paddingLeft: "14px",
      borderLeft: "3px solid #113d29",
      fontStyle: "italic",
      color: "#113d29",
      width: "100%",
      maxWidth: "720px",
      fontSize: "20px",
    },

    code: {
      fontFamily: "monospace",
      backgroundColor: "#dcd8d0",
      padding: "0.2em 0.4em",
      borderRadius: "4px",
      fontSize: "0.9em",
      color: "#113d29",
    },
    pre: {
      fontFamily: "monospace",
      backgroundColor: "#dcd8d0",
      padding: "10px",
      borderRadius: "6px",
      overflowX: "auto",
      margin: "0 0 6px 0",
      width: "100%",
      maxWidth: "720px",
      fontSize: "15px",
      color: "#113d29",
    },

    hr: {
      width: "100%",
      maxWidth: "720px",
      border: "none",
      borderTop: "1px solid #c6c3bb",
      margin: "12px 0",
    },

    table: {
      borderCollapse: "collapse",
      width: "100%",
      maxWidth: "720px",
      marginBottom: "6px",
      fontSize: "18px",
      color: "#113d29",
    },
    thead: { backgroundColor: "#ded9d1" },
    th: {
      textAlign: "left",
      border: "1px solid #c6c3bb",
      padding: "6px",
      fontWeight: "600",
    },
    td: { border: "1px solid #c6c3bb", padding: "6px" },
    tr: { borderBottom: "1px solid #c6c3bb" },

    img: {
      maxWidth: "160px",
      maxHeight: "90px",
      width: "auto",
      height: "auto",
      objectFit: "contain",
      marginBottom: "48px",
      filter: "grayscale(100%)",
    },

    ":last-child": { marginBottom: "0" },
  },
};

registerTheme(soloWantedForest);
