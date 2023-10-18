import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const HeadlineAndText = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme } = context;

  return (
    <div>
      <h2>This is a headline</h2>
      <div
        style={{
          backgroundColor: theme === "light" ? "light" : "dark",
          color: theme === "light" ? "dark" : "light",
        }}
      >
        This is a paragraph
      </div>
    </div>
  );
};

export default HeadlineAndText;
