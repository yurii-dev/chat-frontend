import {
    CREATE_DIALOGS_LOADING,
    CREATE_DIALOGS_SUCCESS,
    CREATE_DIALOGS_ERROR,
  } from "../../../../constants/actionTypes";
  
  const createDialog = (state, { payload, type }) => {
    switch (type) {
      case CREATE_DIALOGS_LOADING: {
        return {
          ...state,
          createDialog: {
            ...state.createDialog,
            loading: true,
          },
        };
      }
      case CREATE_DIALOGS_SUCCESS: {
        return {
          ...state,
          createDialog: {
            ...state.createDialog,
            loading: false,
            data: payload,
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
      default:
        return state;
    }
  };
  
  export default createDialog;
  