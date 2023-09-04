import React from "react";
import Father from "../Father/Father";

const Grandpa: React.FC = () => {
  return (
    <div>
      <p>Grandpa component</p>
      <Father />
    </div>
  );
};

export default Grandpa;
