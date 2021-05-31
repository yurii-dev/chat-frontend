import {
  SET_PASSWORD_LOADING,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_ERROR,
} from "../../constants/actionTypes";

const setPassword = (state, { payload, type }) => {
  switch (type) {
    case SET_PASSWORD_LOADING:
      return {
        ...state,
        setPassword: {
          ...state.auth,
          error: false,
          loading: true,
        },
      };
    case SET_PASSWORD_SUCCESS:
      return {
        ...state,
        setPassword: {
          ...state.auth,
          loading: false,
          data: payload,
        },
      };
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        setPassword: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default setPassword;
