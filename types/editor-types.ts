import { Editor } from "@tiptap/react";

export interface TextState {
  content: string;
  cursorPosition: number;
}

export type ContentBlockType =
  | "paragraph"
  | "list"
  | "listItem"
  | "h1"
  | "h2"
  | "h3"
  | "blockquote";

export interface EditorHistory {
  past: TextState[];
  present: TextState;
  future: TextState[];
}

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  content: string;
  range: {
    from: number;
    to: number;
  };
}

export interface TiptapEditorState {
  editor: Editor | null;
  isReady: boolean;
}

export interface TiptapEditorActions {
  setContent: (content: string) => void;
}

export interface UseTiptapEditorReturn {
  state: TiptapEditorState;
  actions: TiptapEditorActions;
}

export interface TiptapEditorOptions {
  content: string;
  documentId: string;
  editable?: boolean;
  offline?: boolean;
  onUpdate?: (html: string) => void;
  onSelectionUpdate?: (editor: Editor) => void;
  onAccept?: (editor: Editor) => void;
  onReject?: (editor: Editor) => void;
}
