import { createContext, useState, useContext, ReactNode } from "react";

interface TextContextType {
  text: string;
  updateText: (newText: string) => void;
}

export const TextContext = createContext<TextContextType | undefined>(
  undefined
);

interface TextProviderProps {
  children: ReactNode;
}

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

export function useTextContext() {
  const context = useContext(TextContext);

  if (context === undefined) {
    throw new Error("useTextContext must be used within a TextProvider");
  }

  return context;
}
