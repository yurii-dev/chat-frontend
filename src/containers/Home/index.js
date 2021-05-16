import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import getDialogs from "../../context/actions/home/dialogs/getDialogs";
import { GlobalContext } from "../../context/Provider";
import HomeUI from "../../layout/Home";

function HomeContainer() {
  const { dialogDispatch, dialogState } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    getDialogs(history)(dialogDispatch);
  }, []);
  return (
    <>
      <Header />
      <HomeUI state={dialogState} />
    </>
  );
}

export default HomeContainer;
