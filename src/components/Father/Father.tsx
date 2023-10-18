import { useState, useContext } from "react";
import { TextContext } from "../../context/TextContent";

function Father() {
  const contextValue = useContext(TextContext);
  if (!contextValue) return null;
  const { text, updateText } = contextValue;
  const [newText, setNewText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleUpdateClick = () => {
    updateText(newText);
    setNewText("");
  };

  return (
    <div>
      <h3>Father Component</h3>
      <p>Current Text: {text}</p>
      <input
        type="text"
        placeholder="Enter new text"
        value={newText}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdateClick}>Update Text</button>
    </div>
  );
}

export default Father;
