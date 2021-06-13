import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import getDialogs from "../../context/actions/home/dialogs/getDialogs";
import getMe from "../../context/actions/home/getMe";
import { GlobalContext } from "../../context/Provider";
import HomeUI from "../../layout/Home";

function HomeContainer() {
  const {
    dialogDispatch,
    dialogState,
    meState,
    meDispatch,
    listUsersState,
    listUsersDispatch,
    messageState,
    messageDispatch,
    createDialogState,
    createDialogDispatch,
    deleteAccountState,
    deleteAccountDispatch,
    uploadAvatarState,
    uploadAvatarDispatch,
    uploadUsernameState,
    uploadUsernameDispatch,
    uploadPasswordState,
    uploadPasswordDispatch,
  } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    getDialogs()(dialogDispatch);
    getMe(history)(meDispatch);
  }, []);
  return (
    <>
      <Header />
      <HomeUI
        {...{
          dialogState,
          meState,
          listUsersState,
          listUsersDispatch,
          messageState,
          messageDispatch,
          createDialogState,
          createDialogDispatch,
          dialogDispatch,
          deleteAccountState,
          deleteAccountDispatch,
          uploadAvatarState,
          uploadAvatarDispatch,
          uploadUsernameState,
          uploadUsernameDispatch,
          uploadPasswordState,
          uploadPasswordDispatch,
        }}
      />
    </>
  );
}

export default HomeContainer;
