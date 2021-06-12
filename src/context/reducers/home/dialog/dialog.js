import {
  DIALOG_LOADING,
  DIALOG_LOAD_ERROR,
  DIALOG_LOAD_SUCCESS,
  LOGOUT_USER,
} from "../../../../constants/actionTypes";
import dialogInitialState from "../../../initialstates/home/dialog/dialogInitialState";

const dialog = (state, { payload, type }) => {
  switch (type) {
    case DIALOG_LOADING: {
      return {
        ...state,
        dialog: {
          ...state.dialog,
          loading: true,
        },
      };
    }
    case DIALOG_LOAD_SUCCESS: {
      return {
        ...state,
        dialog: {
          ...state.dialog,
          loading: false,
          data: payload,
        },
      };
    }
    case DIALOG_LOAD_ERROR: {
      return {
        ...state,
        dialog: {
          ...state.dialog,
          loading: false,
          error: payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        dialogInitialState: null,
      };
    }
    default:
      return state;
  }
};

export default dialog;
