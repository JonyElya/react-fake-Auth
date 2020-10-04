import { AuthAction, AuthState, GET_USER, SET_USER, SIGN_OUT } from "./types";

const initialState: AuthState = {
  isFetching: false,
};

export function user(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case GET_USER:
      return {
        isFetching: true,
      };
    case SET_USER:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
