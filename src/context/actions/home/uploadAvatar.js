import {
  UPLOAD_AVATAR_ERROR,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_LOADING,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (data) => (dispatch) => {
  dispatch({
    type: UPLOAD_AVATAR_LOADING,
  });
  axiosInstance()
    .patch("/users/me/avatar", { ...data })
    .then(() => {
      dispatch({
        type: UPLOAD_AVATAR_SUCCESS,
        payload: true,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPLOAD_AVATAR_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
