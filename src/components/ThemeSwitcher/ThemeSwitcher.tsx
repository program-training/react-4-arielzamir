import { useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import HeadlineAndText from "../HeadlineAndText/HeadlineAndText";

const ThemeSwitcher = () => {
  const [isClicked, setIsClicked] = useState(false);
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, toggleTheme } = context;

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      toggleTheme(theme);
      <HeadlineAndText />;
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Switch Text</button>
      <h5>{theme} </h5>
    </div>
  );
};

export default ThemeSwitcher;
