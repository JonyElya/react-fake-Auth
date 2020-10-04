import {
  NewsRepository,
  GET_NEWS_PAYLOAD,
  GetNewsAction,
  SET_NEWS_PAYLOAD,
  SetNewsAction,
  Post,
  NEW_POST_NEWS_PAYLOAD,
  AddNewsAction,
} from "./types";
import { AppThunk } from "../index";
import { NewsRepositoryImpl } from "../../domain/NewsRepositoryImpl";
import { httpClient } from "../../domain/http-client";
import { isRequestError } from "../common/error";
import { showError } from "../common/show-error";

const setNews = (payload?: Post[]): SetNewsAction => ({
  type: SET_NEWS_PAYLOAD,
  payload,
});

export const getNews = (): GetNewsAction => ({
  type: GET_NEWS_PAYLOAD,
});
export const addNews = (payload?: Post[]): AddNewsAction => ({
  type: NEW_POST_NEWS_PAYLOAD,
  payload,
});

export const fetchNews = (
  newsRepository: NewsRepository
) => (): AppThunk => async (dispatch) => {
  dispatch(getNews());
  const result = await newsRepository.getNews();
  if (isRequestError(result)) {
    showError(result);
    dispatch(setNews());
    return;
  }
  dispatch(setNews(result));
};
export const addNewsPost = (newsRepository: NewsRepository) => (
  request: Post
) => (): AppThunk => async (dispatch) => {
  const result = await newsRepository.addPost(request);
  if (isRequestError(result)) {
    showError(result);
    dispatch(addNews());
    return;
  }
  dispatch(addNews(result));
};

export const fetchNewsREST = fetchNews(new NewsRepositoryImpl(httpClient));

export const addNewsREST = addNewsPost(new NewsRepositoryImpl(httpClient));
