import {
  LIST_USERS_LOADING,
  LIST_USERS_SUCCESS,
  LIST_USERS_ERROR,
  LOGOUT_USER,
} from "../../../constants/actionTypes";

const listUsers = (state, { payload, type }) => {
  switch (type) {
    case LIST_USERS_LOADING: {
      return {
        ...state,
        listUsers: {
          ...state.listUsers,
          loading: true,
        },
      };
    }
    case LIST_USERS_SUCCESS: {
      return {
        ...state,
        listUsers: {
          ...state.listUsers,
          loading: false,
          data: payload,
        },
      };
    }
    case LIST_USERS_ERROR: {
      return {
        ...state,
        listUsers: {
          ...state.listUsers,
          loading: false,
          error: payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        listUsers: null,
      };
    }
    default:
      return state;
  }
};

export default listUsers;
