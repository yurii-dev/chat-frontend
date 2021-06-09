import {
  MESSAGES_LOADING,
  MESSAGES_SUCCESS,
  MESSAGES_ERROR,
  LOGOUT_USER,
} from "../../../constants/actionTypes";

const message = (state, { payload, type }) => {
  switch (type) {
    case MESSAGES_LOADING: {
      return {
        ...state,
        message: {
          ...state.message,
          loading: true,
        },
      };
    }
    case MESSAGES_SUCCESS: {
      return {
        ...state,
        message: {
          ...state.message,
          loading: false,
          data: payload,
        },
      };
    }
    case MESSAGES_ERROR: {
      return {
        ...state,
        message: {
          ...state.message,
          loading: false,
          error: payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        message,
      };
    }
    default:
      return state;
  }
};

export default message;
