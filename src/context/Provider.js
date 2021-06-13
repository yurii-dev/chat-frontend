import React, { createContext, useReducer } from "react";
import authInitialState from "./initialstates/authInitialState";
import dialogInitialState from "./initialstates/home/dialog/dialogInitialState";
import meInitialState from "./initialstates/home/meInitialState";
import messageInitialState from "./initialstates/home/messageInitialSatate";
import listUsersInitialState from "./initialstates/home/listUsersInitialState";
import createDialogInitialState from "./initialstates/home/dialog/createDialogInitialState";
import forgotPasswordInitialState from "./initialstates/forgotPasswordInitialState";
import setPasswordInitialState from "./initialstates/setPasswordInitialState";
import deleteAccountInitialState from "./initialstates/home/deleteAccountInitialState";
import uploadAvatarInitialState from "./initialstates/home/uploadAvatarInitialState";
import uploadUsernameInitialState from "./initialstates/home/uploadUsernameInitialState";
import uploadPasswordInitialState from "./initialstates/home/uploadPasswordInitialState";
import auth from "./reducers/auth";
import setPassword from "./reducers/setPassword";
import forgotPassword from "./reducers/forgotPassword";
import dialog from "./reducers/home/dialog/dialog";
import me from "./reducers/home/me";
import message from "./reducers/home/message";
import listUsers from "./reducers/home/listUsers";
import createDialog from "./reducers/home/dialog/createDialog";
import deleteAccount from "./reducers/home/deleteAccount";
import uploadAvatar from "./reducers/home/uploadAvatar";
import uploadUsername from "./reducers/home/uploadUsername";
import uploadPassword from "./reducers/home/uploadPassword";

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

  const [deleteAccountState, deleteAccountDispatch] = useReducer(
    deleteAccount,
    deleteAccountInitialState
  );
  const [uploadAvatarState, uploadAvatarDispatch] = useReducer(
    uploadAvatar,
    uploadAvatarInitialState
  );
  const [uploadUsernameState, uploadUsernameDispatch] = useReducer(
    uploadUsername,
    uploadUsernameInitialState
  );
  const [uploadPasswordState, uploadPasswordDispatch] = useReducer(
    uploadPassword,
    uploadPasswordInitialState
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
        createDialogState,
        createDialogDispatch,
        forgotPasswordState,
        forgotPasswordDispatch,
        setPasswordState,
        setPasswordDispatch,
        deleteAccountState,
        deleteAccountDispatch,
        uploadAvatarState,
        uploadAvatarDispatch,
        uploadUsernameState,
        uploadUsernameDispatch,
        uploadPasswordState,
        uploadPasswordDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
