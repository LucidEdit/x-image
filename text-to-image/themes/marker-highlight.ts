import { Theme } from "../types";

export const markerHighlightTheme: Theme = {
  name: "marker-highlight",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
  ],
  wrapperStyle: {
    width: "900px",
    padding: "60px 80px",
    backgroundColor: "#ffffff",
    fontFamily: '"Inter", sans-serif',
    color: "#1a1a1a",
    textAlign: "left",
    lineHeight: "1.6",
    boxSizing: "border-box",
  },
  elementStyles: {
    h1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "36px",
      fontWeight: "600",
      margin: "0 0 24px 0",
      lineHeight: "1.3",
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "28px",
      fontWeight: "600",
      margin: "0 0 20px 0",
      lineHeight: "1.3",
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "24px",
      fontWeight: "500",
      margin: "0 0 16px 0",
      lineHeight: "1.3",
    },
    p: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "20px",
      fontWeight: "400",
      margin: "0 0 16px 0",
      lineHeight: "1.6",
    },
    "p:last-child": {
      marginBottom: "0",
    },
    em: { 
      fontStyle: "italic" 
    },
    strong: { 
      fontWeight: "600" 
    },
    u: { 
      textDecoration: "underline" 
    },
    s: { 
      textDecoration: "line-through" 
    },
    blockquote: {
      margin: "0 0 20px 40px",
      paddingLeft: "20px",
      borderLeft: "3px solid #ccc",
      fontStyle: "italic",
      color: "#555",
      fontFamily: '"Inter", sans-serif',
    },
    "blockquote:last-child": {
      marginBottom: "0",
    },
    code: {
      fontFamily: "monospace",
      backgroundColor: "#f5f5f5",
      padding: "0.2em 0.4em",
      borderRadius: "4px",
      fontSize: "0.9em",
    },
    pre: {
      backgroundColor: "#f5f5f5",
      padding: "1.5em",
      borderRadius: "6px",
      overflowX: "auto",
      margin: "0 0 20px 0",
    },
    "pre:last-child": {
      marginBottom: "0",
    },
    ul: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "20px",
      margin: "0 0 16px 40px",
      paddingLeft: "20px",
      listStyleType: "disc",
    },
    "ul:last-child": {
      marginBottom: "0",
    },
    ol: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "20px",
      margin: "0 0 16px 40px",
      paddingLeft: "20px",
      listStyleType: "decimal",
    },
    "ol:last-child": {
      marginBottom: "0",
    },
    li: {
      marginBottom: "8px",
      fontSize: "20px",
    },
    "li:last-child": {
      marginBottom: "0",
    },
    a: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "20px",
      margin: "0 0 16px 0",
      color: "#1a1a1a",
      textDecoration: "underline",
      display: "block",
    },
    mark: {
      backgroundColor: "transparent",
      background: "none",
      position: "relative",
      padding: "4px 12px",
      margin: "0 2px",
      zIndex: "1",
      display: "inline-block",
    },
  },
  customCSS: `
    /* Hand-drawn marker circle effects - applied directly to mark elements */
    mark[data-color="hsl(var(--highlight-yellow))"] {
      border: 3px solid hsl(54, 91%, 60%);
      border-radius: 50% 40% 60% 30% / 40% 50% 30% 60%;
      transform: rotate(-2deg);
      padding: 2px 6px;
      background: transparent;
    }
    
    mark[data-color="hsl(var(--highlight-red))"] {
      border: 3px solid hsl(0, 85%, 60%);
      border-radius: 40% 50% 30% 60% / 50% 40% 60% 30%;
      transform: rotate(1.5deg);
      padding: 2px 6px;
      background: transparent;
    }
    
    mark[data-color="hsl(var(--highlight-green))"] {
      border: 3px solid hsl(138, 70%, 50%);
      border-radius: 60% 30% 50% 40% / 30% 60% 40% 50%;
      transform: rotate(-1deg);
      padding: 2px 6px;
      background: transparent;
    }
    
    mark[data-color="hsl(var(--highlight-blue))"] {
      border: 3px solid hsl(214, 85%, 60%);
      border-radius: 30% 60% 40% 50% / 60% 30% 50% 40%;
      transform: rotate(2deg);
      padding: 2px 6px;
      background: transparent;
    }
    
    mark[data-color="hsl(var(--highlight-purple))"] {
      border: 3px solid hsl(270, 80%, 65%);
      border-radius: 45% 55% 35% 65% / 55% 45% 65% 35%;
      transform: rotate(-1.5deg);
      padding: 2px 6px;
      background: transparent;
    }
  `,
}; 