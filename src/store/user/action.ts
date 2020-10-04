import {
  AuthAction,
  GET_USER,
  SET_USER,
  SetUserAction,
  SIGN_OUT,
  SignInData,
  User,
  UserRepository,
  GetUserAction,
} from "./types";
import { ThunkAction } from "redux-thunk";
import { AppThunk, RootState } from "../index";
import { httpClient } from "../../domain/http-client";
import { UserRepositoryImpl } from "../../domain/UserRepositoryImpl";
import { isRequestError, RequestError } from "../common/error";
import { showError } from "../common/show-error";

const setUser = (payload?: User | RequestError): SetUserAction => ({
  type: SET_USER,
  payload,
});
const getUser = (): GetUserAction => ({
  type: GET_USER,
});
export const signIn = (userRepository: UserRepository) => (
  request: SignInData
): AppThunk => async (dispatch) => {
  dispatch(getUser());
  const result = await userRepository.getUser(request);
  if (isRequestError(result)) {
    showError(result);
    dispatch(getUser());
  }
  dispatch(setUser(result));
  window.localStorage.setItem("test.authenticated", "true");
};

// Log out
export const signOut = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      window.localStorage.removeItem("test.authenticated");
      dispatch({
        type: SIGN_OUT,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const checkAuthStatus = (): boolean => {
  if (localStorage.getItem("test.authenticated")) {
    return true;
  } else {
    return false;
  }
};
export const fetchLoginREST = signIn(new UserRepositoryImpl(httpClient));
