import {
  UPLOAD_PASSWORD_ERROR,
  UPLOAD_PASSWORD_LOADING,
  UPLOAD_PASSWORD_SUCCESS,
  LOGOUT_USER,
} from "../../../constants/actionTypes";

const uploadPassword = (state, { payload, type }) => {
  switch (type) {
    case UPLOAD_PASSWORD_LOADING: {
      return {
        ...state,
        uploadPassword: {
          ...state.uploadPassword,
          loading: true,
        },
      };
    }
    case UPLOAD_PASSWORD_SUCCESS: {
      return {
        ...state,
        uploadPassword: {
          ...state.uploadPassword,
          loading: false,
          data: payload,
        },
      };
    }
    case UPLOAD_PASSWORD_ERROR: {
      return {
        ...state,
        uploadPassword: {
          ...state.uploadPassword,
          loading: false,
          error: payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        uploadPassword: {
          ...state.uploadPassword,
          loading: false,
          data: false,
          error: null,
        },
      };
    }
    default:
      return state;
  }
};

export default uploadPassword;
