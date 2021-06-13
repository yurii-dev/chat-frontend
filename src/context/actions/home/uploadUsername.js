import {
  UPLOAD_USERNAME_ERROR,
  UPLOAD_USERNAME_LOADING,
  UPLOAD_USERNAME_SUCCESS,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (data) => (dispatch) => {
  dispatch({
    type: UPLOAD_USERNAME_LOADING,
  });
  axiosInstance()
    .patch("/users/me/username", { ...data })
    .then(() => {
      dispatch({
        type: UPLOAD_USERNAME_SUCCESS,
        payload: true,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPLOAD_USERNAME_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
