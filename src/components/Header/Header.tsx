import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const user = useContext(UserContext);
  if (!user) return null;
  const { username } = user;

  return (
    <div>
      <p>{username}</p>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
