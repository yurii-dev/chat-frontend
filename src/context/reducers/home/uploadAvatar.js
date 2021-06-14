import {
  UPLOAD_AVATAR_ERROR,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_LOADING,
  LOGOUT_USER,
} from "../../../constants/actionTypes";

const uploadAvatar = (state, { payload, type }) => {
  switch (type) {
    case UPLOAD_AVATAR_LOADING: {
      return {
        ...state,
        uploadAvatar: {
          ...state.uploadAvatar,
          loading: true,
        },
      };
    }
    case UPLOAD_AVATAR_SUCCESS: {
      return {
        ...state,
        uploadAvatar: {
          ...state.uploadAvatar,
          loading: false,
          data: payload,
        },
      };
    }
    case UPLOAD_AVATAR_ERROR: {
      return {
        ...state,
        uploadAvatar: {
          ...state.uploadAvatar,
          loading: false,
          error: payload,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        uploadAvatar: {
          ...state.uploadAvatar,
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

export default uploadAvatar;
