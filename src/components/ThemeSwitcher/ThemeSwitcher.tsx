import { useThemeContext } from "../../context/themeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} Theme
    </button>
  );
}
