import {
  GET_ME_LOADING,
  GET_ME_SUCCESS,
  GET_ME_ERROR,
} from "../../../constants/actionTypes";

const me = (state, { payload, type }) => {
  switch (type) {
    case GET_ME_LOADING: {
      return {
        ...state,
        me: {
          ...state.me,
          loading: true,
        },
      };
    }
    case GET_ME_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          loading: false,
          data: payload,
        },
      };
    }
    case GET_ME_ERROR: {
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

export default me;
