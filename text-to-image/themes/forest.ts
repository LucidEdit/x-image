import { Theme } from "../types";
import { registerTheme } from "./registry";

export const forestTheme: Theme = {
  name: "forest",
  label: "Forest",
  description: "Green vibes",
  icon: "Tree",
  backgroundImage:
    "https://i.pinimg.com/736x/3e/3b/17/3e3b174e38a0f92a5b406fdab518b757.jpg",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Domine:wght@400;700&display=swap",
  ],

  wrapperStyle: {
    width: "900px",
    padding: "120px 80px",
    backgroundColor: "#29443b",
    backgroundImage: "none",
    fontFamily: '"Domine", Georgia, "Times New Roman", serif',
    color: "#ece9c9",
    lineHeight: "1.3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "16px",
    boxSizing: "border-box",
    position: "relative",
  },

  elementStyles: {
    h1: { fontSize: "48px", fontWeight: "700", margin: "0", color: "inherit" },
    h2: { fontSize: "40px", fontWeight: "700", margin: "0", color: "inherit" },
    h3: { fontSize: "34px", fontWeight: "700", margin: "0", color: "inherit" },

    p: {
      fontSize: "34px",
      fontWeight: "400",
      margin: "0",
      color: "inherit",
      textAlign: "left",
    },

    em: { fontStyle: "italic", fontWeight: "700" },
    strong: { fontWeight: "700" },
    u: { textDecoration: "underline" },
    s: { textDecoration: "line-through" },

    blockquote: {
      margin: "0",
      paddingLeft: "24px",
      borderLeft: "4px solid rgba(236,233,201,0.6)",
      fontStyle: "italic",
      fontSize: "30px",
      color: "inherit",
    },

    code: {
      fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
      backgroundColor: "rgba(236,233,201,0.05)",
      padding: "0.25em 0.45em",
      borderRadius: "4px",
      fontSize: "0.9em",
      margin: "0",
    },
    pre: {
      fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
      backgroundColor: "rgba(236,233,201,0.05)",
      padding: "1.25em",
      borderRadius: "6px",
      overflowX: "auto",
      fontSize: "0.95em",
      margin: "0",
    },

    ul: {
      fontSize: "30px",
      fontWeight: "700",
      paddingLeft: "40px",
      listStyleType: "disc",
      margin: "0",
      color: "inherit",
    },
    ol: {
      fontSize: "30px",
      fontWeight: "700",
      paddingLeft: "40px",
      listStyleType: "decimal",
      margin: "0",
      color: "inherit",
    },
    li: { margin: "0" },

    a: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#ece9c9 !important",
      textDecoration: "underline",
      margin: "0",
    },
  },

  customCSS: `
    h1, h2, h3, h4, h5, h6,
    p, blockquote, li, code, pre, a, em, strong, u, s {
      text-shadow: none !important;
      filter: none !important;
    }

    h1, h2, h3, p, a {
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
    }
  `,
};

registerTheme(forestTheme);
