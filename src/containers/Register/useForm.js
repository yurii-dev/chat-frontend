import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();
  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      for (const item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item] });
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      history.push("/verify");
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const registerFormValid =
    !form.email?.length || !form.username?.length || !form.password?.length;

  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  };
  return { form, onChange, registerFormValid, fieldErrors, onSubmit, loading };
};
