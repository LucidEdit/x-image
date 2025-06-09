export interface ActionState<T> {
  isSuccess: boolean;
  message: string;
  data?: T;
}

export * from "./image-types";
export * from "./editor-types";
