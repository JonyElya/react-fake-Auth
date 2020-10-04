// @ts-ignore
import { RequestError } from "../common/error";

export const GET_NEWS_PAYLOAD = "GET_NEWS_PAYLOAD";
export const SET_NEWS_PAYLOAD = "SET_NEWS_PAYLOAD";
export const NEW_POST_NEWS_PAYLOAD = "NEW_POST_NEWS_PAYLOAD";

export interface GetNewsAction {
  type: typeof GET_NEWS_PAYLOAD;
}
export interface AddNewsAction {
  type: typeof NEW_POST_NEWS_PAYLOAD;
  payload?: Post[];
}

export interface SetNewsAction {
  type: typeof SET_NEWS_PAYLOAD;
  payload?: Post[];
}

export type InitActionType = GetNewsAction | SetNewsAction | AddNewsAction;

export interface Post {
  title: string;
  description: string;
}

export interface NewsRepository {
  getNews(): Promise<Post[] | RequestError>;
  addPost(request: Post): Promise<Post[] | RequestError>;
}

export interface InitState {
  isFetching: boolean;
  news?: Post[];
}
