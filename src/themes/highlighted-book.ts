import { Theme } from "../types";

export const highlightedBookTheme: Theme = {
  name: "highlighted-book",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
  ],
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
    p: { 
      fontSize: "24px", 
      lineHeight: "1.7", 
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
      marginLeft: "2rem", 
      paddingLeft: "1rem",
      fontFamily: '"Libre Baskerville", serif',
    },
    ol: { 
      marginLeft: "2rem", 
      paddingLeft: "1rem",
      fontFamily: '"Libre Baskerville", serif',
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
    mark: {
      background: "none",
      position: "relative",
      padding: "0 4px",
      margin: "0 -4px",
      zIndex: "1",
      fontFamily: '"Libre Baskerville", serif',
    },
    customCSS: `
      mark {
        background: none;
        position: relative;
        padding: 0 4px;
        margin: 0 -4px;
        z-index: 1;
        font-family: "Libre Baskerville", serif;
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
}; 