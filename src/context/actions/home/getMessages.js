import {
  MESSAGES_LOADING,
  MESSAGES_SUCCESS,
  MESSAGES_ERROR,
} from "../../../constants/actionTypes/index";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (data) => (dispatch) => {
  dispatch({
    type: MESSAGES_LOADING,
  });
  axiosInstance()
    .get("/messages", { params: { dialogId: data } })
    .then((res) => {
      dispatch({
        type: MESSAGES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MESSAGES_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
