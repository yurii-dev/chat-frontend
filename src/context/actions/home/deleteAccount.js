import { DELETE_ACCOUNT_LOADING, DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_ERROR } from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (data) => (dispatch) => {
  dispatch({
    type: DELETE_ACCOUNT_LOADING,
  });
  axiosInstance()
    .delete("/users/me", { data })
    .then(() => {
      dispatch({
        type: DELETE_ACCOUNT_SUCCESS,
        payload: true,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_ACCOUNT_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
