export type Theme = {
  name: string;
  wrapperStyle: Partial<CSSStyleDeclaration>;
  elementStyles?: Record<string, Partial<CSSStyleDeclaration>>;
  customCSS?: string;
};
