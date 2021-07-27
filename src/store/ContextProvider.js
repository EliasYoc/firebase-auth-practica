import { createContext, useReducer, useState } from "react";
import { initialAuth, reducerAuth } from "../reducers/reducerAuth";
import {
  initialCountries,
  reducerCountries,
} from "../reducers/reducerCountries";
export const Context = createContext();
// const [state, dispatch] = useReducer(reducer, initialState, init)

export const ContextProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(false);
  const [stateAuth, dispatchAuth] = useReducer(reducerAuth, initialAuth);
  const [stateCountries, dispatchCountries] = useReducer(
    reducerCountries,
    initialCountries
  );
  const { user } = stateAuth;
  // console.log("desde context store:", user);
  return (
    <Context.Provider
      value={{
        user,
        isLoged,
        setIsLoged,
        stateAuth,
        dispatchAuth,
        stateCountries,
        dispatchCountries,
      }}
    >
      {children}
    </Context.Provider>
  );
};
