import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { authLogout } from "../reducers/actions/actionsAuth";
import { Context } from "../store/ContextProvider";
import "./Header.css";
import Loader from "./Loader";
const Header = () => {
  const { stateAuth, dispatchAuth, dispatchCountries } = useContext(Context);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    await authLogout(dispatchAuth, setIsLoading, dispatchCountries);
    history.push("/login");
  };
  return (
    <header className="app-header">
      {isLoading && <Loader borderRadiusNone />}
      <h1>{stateAuth.user.displayName || ""}</h1>
      <button onClick={handleClick} className="app-header__btn">
        LogOut
      </button>
    </header>
  );
};

export default Header;
