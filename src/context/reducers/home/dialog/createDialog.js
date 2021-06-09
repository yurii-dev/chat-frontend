import {
  CREATE_DIALOGS_LOADING,
  CREATE_DIALOGS_SUCCESS,
  CREATE_DIALOGS_ERROR,
  LOGOUT_USER,
} from "../../../../constants/actionTypes";

const createDialog = (state, { payload, type }) => {
  switch (type) {
    case CREATE_DIALOGS_LOADING: {
      return {
        ...state,
        createDialog: {
          ...state.createDialog,
          loading: true,
          data: false,
        },
      };
    }
    case CREATE_DIALOGS_SUCCESS: {
      return {
        ...state,
        createDialog: {
          ...state.createDialog,
          loading: false,
          data: true,
        },
      };
    }
    case CREATE_DIALOGS_ERROR: {
      return {
        ...state,
        createDialog: {
          ...state.createDialog,
          loading: false,
          error: payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        createDialog,
      };
    }
    default:
      return state;
  }
};

export default createDialog;
