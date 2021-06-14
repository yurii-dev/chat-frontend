import {
  DELETE_ACCOUNT_LOADING,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_ERROR,
  LOGOUT_USER,
} from "../../../constants/actionTypes";

const deleteAccount = (state, { payload, type }) => {
  switch (type) {
    case DELETE_ACCOUNT_LOADING: {
      return {
        ...state,
        deleteAccount: {
          ...state.deleteAccount,
          loading: true,
        },
      };
    }
    case DELETE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        deleteAccount: {
          ...state.deleteAccount,
          loading: false,
          data: payload,
        },
      };
    }
    case DELETE_ACCOUNT_ERROR: {
      return {
        ...state,
        deleteAccount: {
          ...state.deleteAccount,
          loading: false,
          error: payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        deleteAccount: {
          ...state.deleteAccount,
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

export default deleteAccount;
