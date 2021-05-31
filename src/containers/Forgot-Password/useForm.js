import { useContext, useEffect, useState } from "react";
import { forgotPassword } from "../../context/actions/auth/forgotPassword";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const [form, setForm] = useState({});

  const {
    forgotPasswordDispatch,
    forgotPasswordState: {
      forgotPassword: { loading, error, data },
    },
  } = useContext(GlobalContext);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.email?.length;

  const onSubmit = () => {
    forgotPassword(form)(forgotPasswordDispatch);
  };
  return { form, onChange, error, loginFormValid, onSubmit, loading };
};
