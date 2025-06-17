export interface Theme {
  name: string;
  label: string;
  description: string;
  icon: string;
  
  backgroundImage?: string;
  fontLinks?: string[];
  wrapperStyle: Record<string, string | number>;
  elementStyles?: Record<string, Record<string, string | number>>;
  customCSS?: string;
}

export interface RenderToImageOptions {
  theme?: string;
  returnDataUrlOnly?: boolean;
  maxLength?: number;
  backgroundImage?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
  scale?: number;
  format?: "png" | "jpeg" | "webp";
  quality?: number;
  fullPage?: boolean;
  darkMode?: boolean;
  delayMs?: number;
  body?: string;
  wrap?: boolean;
  fontLinks?: string[];
  customCSS?: string;
  transparent?: boolean;
  markdown?: string;
} 