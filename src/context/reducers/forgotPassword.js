import {
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from "../../constants/actionTypes";

const forgotPassword = (state, { payload, type }) => {
  switch (type) {
    case FORGOT_PASSWORD_LOADING:
      return {
        ...state,
        forgotPassword: {
          ...state.auth,
          error: false,
          loading: true,
        },
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: {
          ...state.auth,
          loading: false,
          data: payload,
        },
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPassword: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default forgotPassword;
