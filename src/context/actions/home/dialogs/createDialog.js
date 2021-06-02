import {
  CREATE_DIALOGS_LOADING,
  CREATE_DIALOGS_SUCCESS,
  CREATE_DIALOGS_ERROR,
} from "../../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../../constants/api";
import axiosInstance from "../../../../helpers/axiosInstance";
import getDialogs from "./getDialogs";

export default ({data, dialogDispatch}) => (dispatch) => {
  dispatch({
    type: CREATE_DIALOGS_LOADING,
  });
  axiosInstance()
    .post("/dialogs", { ...data })
    .then((res) => {
      getDialogs()(dialogDispatch);
      dispatch({
        type: CREATE_DIALOGS_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_DIALOGS_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};
