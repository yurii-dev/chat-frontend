import {
  UPLOAD_PASSWORD_ERROR,
  UPLOAD_PASSWORD_LOADING,
  UPLOAD_PASSWORD_SUCCESS,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (data) => (dispatch) => {
  dispatch({
    type: UPLOAD_PASSWORD_LOADING,
  });
  axiosInstance()
    .patch("/users/me/password", { ...data })
    .then(() => {
      dispatch({
        type: UPLOAD_PASSWORD_SUCCESS,
        payload: true,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPLOAD_PASSWORD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
