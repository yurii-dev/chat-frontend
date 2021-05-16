import {
  MESSAGES_LOADING,
  MESSAGES_SUCCESS,
  MESSAGES_ERROR,
} from "../../../constants/actionTypes";

const message = (state, { payload, type }) => {
  switch (type) {
    case MESSAGES_LOADING: {
      return {
        ...state,
        me: {
          ...state.me,
          loading: true,
        },
      };
    }
    case MESSAGES_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          loading: false,
          data: payload,
        },
      };
    }
    case MESSAGES_ERROR: {
      return {
        ...state,
        me: {
          ...state.me,
          loading: false,
          error: payload,
        },
      };
    }
    default:
      return state;
  }
};

export default message;
