import {
  GET_ME_LOADING,
  GET_ME_SUCCESS,
  GET_ME_ERROR
  } from "../../../constants/actionTypes";
  import { CONNECTION_ERROR } from "../../../constants/api";
  import axiosInstance from "../../../helpers/axiosInstance";
  
  export default (history) => (dispatch) => {
    dispatch({
      type: GET_ME_LOADING,
    });
    axiosInstance(history)
      .get("/users/me")
      .then((res) => {
        dispatch({
          type: GET_ME_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ME_ERROR,
          payload: err.response ? err.response.data : CONNECTION_ERROR,
        });
      });
  };
  