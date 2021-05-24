import React from "react";
import ForgotPasswordUI from "../../layout/Forgot-Password";
import useForm from "./useForm";

function ForgotPasswordContainer() {
  return <ForgotPasswordUI form={useForm()} />;
}

export default ForgotPasswordContainer;
