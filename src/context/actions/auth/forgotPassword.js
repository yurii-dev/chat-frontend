import {
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const forgotPassword =
  ({ email }) =>
  (dispatch) => {
    dispatch({
      type: FORGOT_PASSWORD_LOADING,
    });
    console.log(email);
    axiosInstance()
      .get("/users/forgotpassword", { params: { email } })
      .then((res) => {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_ERROR,
          payload: err.response ? err.response.data : "COULD NOT CONNECT",
        });
      });
  };
