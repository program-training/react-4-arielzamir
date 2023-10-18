import { createContext, useState, ReactNode } from "react";

interface TextContextType {
  text: string;
  updateText: (newText: string) => void;
}

interface TextProviderProps {
  children: ReactNode;
}

export const TextContext = createContext<TextContextType | undefined>(
  undefined
);

export function TextProvider({ children }: TextProviderProps) {
  const [text, setText] = useState("hello world");

  const updateText = (newText: string) => {
    setText(newText);
  };

  const contextValue: TextContextType = {
    text,
    updateText,
  };

  return (
    <TextContext.Provider value={contextValue}>{children}</TextContext.Provider>
  );
}
