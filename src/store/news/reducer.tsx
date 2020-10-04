import {
  GET_NEWS_PAYLOAD,
  InitActionType,
  InitState,
  NEW_POST_NEWS_PAYLOAD,
  SET_NEWS_PAYLOAD,
} from "./types";

const initialState: InitState = {
  isFetching: false,
};

export function news(state = initialState, action: InitActionType): InitState {
  switch (action.type) {
    case GET_NEWS_PAYLOAD:
      return {
        isFetching: true,
      };

    case SET_NEWS_PAYLOAD:
      return {
        ...state,
        isFetching: false,
        news: action.payload,
      };
    case NEW_POST_NEWS_PAYLOAD:
      return {
        ...state,
        isFetching: false,
        news: state.news?.push(action.payload),
      };
    default:
      return state;
  }
}
