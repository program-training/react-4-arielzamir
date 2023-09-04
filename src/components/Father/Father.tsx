import React, { useState } from "react";
import { useTextContext } from "../../context/TextContent";

function Father() {
  const { text, updateText } = useTextContext();
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
