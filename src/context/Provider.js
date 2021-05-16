import React, { createContext, useReducer } from "react";
import authInitialState from "./initialstates/authInitialState";
import dialogInitialState from "./initialstates/home/dialog/dialogInitialState";
import meInitialState from "./initialstates/home/meInitialState";
import messageInitialState from "./initialstates/home/messageInitialSatate";
import auth from "./reducers/auth";
import dialog from "./reducers/home/dialog/dialog";
import me from "./reducers/home/me";
import message from "./reducers/home/message";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [dialogState, dialogDispatch] = useReducer(dialog, dialogInitialState);
  const [meState, meDispatch] = useReducer(me, meInitialState);
  const [messageState, messageDispatch] = useReducer(
    message,
    messageInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        dialogState,
        dialogDispatch,
        meState,
        meDispatch,
        message,
        messageInitialState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
