import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Main = () => {
  const [showDetails, setShowDetails] = useState(false);

  const user = useContext(UserContext);
  if (!user) return null;
  const { name, phone, email } = user;

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>More Details</button>

      {showDetails && (
        <div>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
};

export default Main;
