import React, { createContext, useReducer } from "react";
import authInitialState from "./initialstates/authInitialState";
import dialogInitialState from "./initialstates/home/dialog/dialogInitialState";
import auth from "./reducers/auth";
import dialog from "./reducers/home/dialog/dialog";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [dialogState, dialogDispatch] = useReducer(dialog, dialogInitialState);

  return (
    <GlobalContext.Provider
      value={{ authState, authDispatch, dialogState, dialogDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
