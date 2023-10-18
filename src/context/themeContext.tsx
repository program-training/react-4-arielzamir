import { createContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: (newText: "light" | "dark") => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
  initialTheme: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = (newText: "light" | "dark") => {
    setTheme(newText === "light" ? "dark" : "light");
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <div>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
