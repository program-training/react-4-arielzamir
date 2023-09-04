import "./App.css";
import { TextProvider } from "./context/TextContent";
import Grandpa from "./components/Grandpa/Grandpa";

function App() {
  return (
    <div>
      <TextProvider>
        <Grandpa />
      </TextProvider>
    </div>
  );
}

export default App;
