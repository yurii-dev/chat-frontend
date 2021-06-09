import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { forgotPassword } from "../../context/actions/auth/forgotPassword";
import { GlobalContext } from "../../context/Provider";
import { FORGOT_PASSWORD_SUCCESS } from "../../constants/actionTypes";

export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();

  const {
    forgotPasswordDispatch,
    forgotPasswordState: {
      forgotPassword: { loading, error, data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      console.log(error);
      for (const item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item] });
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      history.push("/login");
      forgotPasswordDispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: null,
      });
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.email?.length;

  const onSubmit = () => {
    setFieldErrors({});
    forgotPassword(form)(forgotPasswordDispatch);
  };
  return { form, onChange, fieldErrors, loginFormValid, onSubmit, loading };
};
