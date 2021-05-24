import { useContext, useEffect, useState } from "react";
import { setPassword } from "../../context/actions/auth/setPassword";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const [form, setForm] = useState({});

  const {
    setPasswordDispatch,
    setPasswordState: {
      setPassword: { loading, error, data },
    },
  } = useContext(GlobalContext);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.password?.length || !form.repeatPassword?.length;

  const onSubmit = () => {
    setPassword(form)(setPasswordDispatch);
  };
  return { form, onChange, error, loginFormValid, onSubmit, loading };
};
