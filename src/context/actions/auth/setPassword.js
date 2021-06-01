import {
  SET_PASSWORD_LOADING,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const setPassword =
  (password, { token }) =>
  (dispatch) => {
    dispatch({
      type: SET_PASSWORD_LOADING,
    });
    console.log(password);
    axiosInstance()
      .post("/users/forgotpassword", { password, token })
      .then((res) => {
        dispatch({
          type: SET_PASSWORD_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_PASSWORD_ERROR,
          payload: err.response ? err.response.data : "COULD NOT CONNECT",
        });
      });
  };
