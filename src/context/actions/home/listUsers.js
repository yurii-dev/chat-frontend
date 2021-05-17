import {
  LIST_USERS_LOADING,
  LIST_USERS_SUCCESS,
  LIST_USERS_ERROR,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (data) => (dispatch) => {
  dispatch({
    type: LIST_USERS_LOADING,
  });
  axiosInstance()
    .get("/users/find", { params: { user: { name: data } } })
    .then((res) => {
      dispatch({
        type: LIST_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LIST_USERS_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
