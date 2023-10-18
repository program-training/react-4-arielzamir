import { TextProvider } from "./context/TextContent";
import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { ThemeProvider } from "./context/themeContext";
import HeadlineAndText from "./components/HeadlineAndText/HeadlineAndText";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const initialTheme = "light";

  return (
    <div>
      <TextProvider>
        <Grandpa />
      </TextProvider>
      <ThemeProvider initialTheme={initialTheme}>
        <ThemeSwitcher />
        <HeadlineAndText />
        <UserProvider>
          <Header />
          <Main />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
