import { Theme } from "../types";
import { registerTheme } from "./registry";

export const darkMonoPosterTheme: Theme = {
  name: "dark-mono-poster",
  label: "Dark Mode",
  description: "Mono style dark mode",
  icon: "Moon",
  backgroundImage: "https://knloimxfzjvgwpztdaci.supabase.co/storage/v1/object/public/x-image-bg//fddf3ab89ab8e9c7fcf61bd201263e8c.jpg",
  fontLinks: [
    "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap",
  ],
  wrapperStyle: {
    width: "1366px",
    height: "auto",
    padding: "120px",
    backgroundColor: "#000",
    fontFamily: '"Space Mono", monospace',
    color: "#d0d0d0",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxSizing: "border-box",
  },
  elementStyles: {
    h1: {
      fontSize: "48px",
      fontWeight: "400",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#ffffff",
      margin: "0 0 72px 0",
      width: "100%",
      maxWidth: "1120px",
    },
    "h1:last-child": {
      marginBottom: "0",
    },
    h2: {
      fontSize: "40px",
      fontWeight: "400",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#ffffff",
      margin: "0 0 60px 0",
      width: "100%",
      maxWidth: "1120px",
    },
    "h2:last-child": {
      marginBottom: "0",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "400",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#ffffff",
      margin: "0 0 48px 0",
      width: "100%",
      maxWidth: "1120px",
    },
    "h3:last-child": {
      marginBottom: "0",
    },
    p: {
      fontSize: "32px",
      fontWeight: "300",
      lineHeight: "1.6",
      color: "#c0c0c0",
      margin: "0",
      marginBottom: "32px",
      width: "100%",
      maxWidth: "1120px",
    },
    "p:last-child": {
      marginBottom: "0",
    },
    em: { fontStyle: "italic" },
    strong: { fontWeight: "700", color: "#ffffff" },
    u: { textDecoration: "underline" },
    s: { textDecoration: "line-through" },
    blockquote: {
      margin: "0 0 32px 40px",
      paddingLeft: "20px",
      borderLeft: "3px solid #444",
      fontStyle: "italic",
      color: "#cccccc",
      maxWidth: "1080px",
    },
    "blockquote:last-child": {
      marginBottom: "0",
    },
    code: {
      fontFamily: '"Space Mono", monospace',
      backgroundColor: "#111",
      padding: "0.2em 0.4em",
      borderRadius: "4px",
      fontSize: "0.9em",
      color: "#e0e0e0",
    },
    pre: {
      backgroundColor: "#111",
      padding: "1.5em",
      borderRadius: "6px",
      overflowX: "auto",
      margin: "0 0 32px 0",
      maxWidth: "1120px",
    },
    "pre:last-child": {
      marginBottom: "0",
    },
    ul: {
      fontSize: "32px",
      fontWeight: "300",
      lineHeight: "1.6",
      color: "#c0c0c0",
      margin: "0 0 32px 40px",
      listStyleType: "disc",
    },
    "ul:last-child": {
      marginBottom: "0",
    },
    ol: {
      fontSize: "32px",
      fontWeight: "300",
      lineHeight: "1.6",
      color: "#c0c0c0",
      margin: "0 0 32px 40px",
      listStyleType: "decimal",
    },
    "ol:last-child": {
      marginBottom: "0",
    },
    li: { 
      marginBottom: "8px",
    },
    "li:last-child": {
      marginBottom: "0",
    },
    a: { 
      fontSize: "32px",
      fontWeight: "300",
      lineHeight: "1.6",
      color: "#c0c0c0 !important",
      margin: "0",
      marginBottom: "32px",
      width: "100%",
      maxWidth: "1120px",
      textDecoration: "underline",
      display: "block",
    },
    "a:last-child": {
      marginBottom: "0",
    },
  },
};

registerTheme(darkMonoPosterTheme);
