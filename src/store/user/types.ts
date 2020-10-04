import { RequestError } from "../common/error";

export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";
export const SIGN_OUT = "SIGN_OUT";

export interface User {
  name: string;
}

export interface SignInData {
  name: string;
  password: string;
}

// Actions
export interface SetUserAction {
  type: typeof SET_USER;
  payload?: User;
}
export interface GetUserAction {
  type: typeof GET_USER;
}
interface SignOutAction {
  type: typeof SIGN_OUT;
}
export interface UserRepository {
  getUser(request: SignInData): Promise<User | RequestError>;
}

export type AuthAction = SetUserAction | SignOutAction | GetUserAction;

export interface AuthState {
  isFetching: boolean;
  user?: User | null;
}
