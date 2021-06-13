import {
  UPLOAD_USERNAME_ERROR,
  UPLOAD_USERNAME_LOADING,
  UPLOAD_USERNAME_SUCCESS,
  LOGOUT_USER,
} from "../../../constants/actionTypes";

const uploadUsername = (state, { payload, type }) => {
  switch (type) {
    case UPLOAD_USERNAME_LOADING: {
      return {
        ...state,
        uploadUsername: {
          ...state.uploadUsername,
          loading: true,
        },
      };
    }
    case UPLOAD_USERNAME_SUCCESS: {
      return {
        ...state,
        uploadUsername: {
          ...state.uploadUsername,
          loading: false,
          data: true,
        },
      };
    }
    case UPLOAD_USERNAME_ERROR: {
      return {
        ...state,
        uploadUsername: {
          ...state.uploadUsername,
          loading: false,
          error: payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        uploadUsername: {
          ...state.uploadUsername,
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

export default uploadUsername;
