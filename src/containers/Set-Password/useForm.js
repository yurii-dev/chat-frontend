import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { setPassword } from "../../context/actions/auth/setPassword";
import { GlobalContext } from "../../context/Provider";
import queryString from "query-string";

export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();
  const { search } = useLocation();
  const token = queryString.parse(search);
  console.log(token);

  const {
    setPasswordDispatch,
    setPasswordState: {
      setPassword: { loading, error, data },
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
      history.push("/login");
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !(
    form.password == form.repeatPassword &&
    form.password?.length &&
    form.repeatPassword?.length
  );
  const onSubmit = () => {
    setFieldErrors({});
    setPassword(form.password, token)(setPasswordDispatch);
  };
  return { form, onChange, loginFormValid, onSubmit, loading, fieldErrors };
};
