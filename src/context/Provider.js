import React, { createContext, useReducer } from "react";
import authInitialState from "./initialstates/authInitialState";
import dialogInitialState from "./initialstates/home/dialog/dialogInitialState";
import meInitialState from "./initialstates/home/meInitialState";
import messageInitialState from "./initialstates/home/messageInitialSatate";
import listUsersInitialState from "./initialstates/home/listUsersInitialState";
<<<<<<< HEAD
import createDialogInitialState from "./initialstates/home/dialog/createDialogInitialState";
=======
import forgotPasswordInitialState from "./initialstates/forgotPasswordInitialState";
import setPasswordInitialState from "./initialstates/setPasswordInitialState";
>>>>>>> 63cae081e4519d62101ea58aca6a7478f8c43337
import auth from "./reducers/auth";
import setPassword from "./reducers/setPassword";
import forgotPassword from "./reducers/forgotPassword";
import dialog from "./reducers/home/dialog/dialog";
import me from "./reducers/home/me";
import message from "./reducers/home/message";
import listUsers from "./reducers/home/listUsers";
import createDialog from "./reducers/home/dialog/createDialog";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [dialogState, dialogDispatch] = useReducer(dialog, dialogInitialState);
  const [meState, meDispatch] = useReducer(me, meInitialState);
  const [setPasswordState, setPasswordDispatch] = useReducer(
    setPassword,
    setPasswordInitialState
  );
  const [forgotPasswordState, forgotPasswordDispatch] = useReducer(
    forgotPassword,
    forgotPasswordInitialState
  );
  const [messageState, messageDispatch] = useReducer(
    message,
    messageInitialState
  );
  const [listUsersState, listUsersDispatch] = useReducer(
    listUsers,
    listUsersInitialState
  );
  const [createDialogState, createDialogDispatch] = useReducer(
    createDialog,
    createDialogInitialState
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
        messageState,
        messageDispatch,
        listUsersState,
        listUsersDispatch,
<<<<<<< HEAD
        createDialogState,
        createDialogDispatch,
=======
        forgotPasswordState,
        forgotPasswordDispatch,
        setPasswordState,
        setPasswordDispatch,
>>>>>>> 63cae081e4519d62101ea58aca6a7478f8c43337
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
