import {
  DIALOG_LOADING,
  DIALOG_LOAD_ERROR,
  DIALOG_LOAD_SUCCESS,
} from "../../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../../constants/api";
import axiosInstance from "../../../../helpers/axiosInstance";

export default (history) => (dispatch) => {
  dispatch({
    type: DIALOG_LOADING,
  });
  axiosInstance(history)
    .get("/dialogs")
    .then((res) => {
      dispatch({
        type: DIALOG_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DIALOG_LOAD_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
