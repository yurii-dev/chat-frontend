import React from "react";
import SetPasswordUI from "../../layout/Set-Password";
import useForm from "./useForm";

function SetPasswordContainer() {
  return <SetPasswordUI form={useForm()} />;
}

export default SetPasswordContainer;