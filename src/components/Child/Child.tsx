import React, { useContext } from "react";
import { TextContext } from "../../context/TextContent";

const Child: React.FC = () => {
  const contextValue = useContext(TextContext);
  if (!contextValue) return;

  const { text } = contextValue;

  return (
    <div>
      <h4>Child Component</h4>
      <p>Text from Context: {text}</p>
    </div>
  );
};

export default Child;
