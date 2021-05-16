import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const [form, setForm] = useState({});

  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      if (data.user) {
        history.push("/");
      }
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.email?.length || !form.password?.length;

  const onSubmit = () => {
    login(form)(authDispatch);
  };
  return { form, onChange, error, loginFormValid, onSubmit, loading };
};
