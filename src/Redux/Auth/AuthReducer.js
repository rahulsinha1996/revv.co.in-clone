import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  USER_LOGOUT
} from "./actionType";

const initState = {
  isAuth : false,
  currentUser: {},
  error: "",
  isError : false,
};

const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        isAuth : true,
        error : "",
        currentUser : payload,
        isError: false,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        error : payload,
        isError: true,
      };
      case USER_LOGOUT:
        return {
          ...state,
          isAuth: false
        };

    default:
      return {
        ...state,
      };
  }
};

export { AuthReducer };
