import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const register = ({ email, username, password }) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  axiosInstance()
    .post("/users/signup", {
      user: { username, email, password },
    })
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {verify: true},
      })
    )
    .catch((err) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};
