import {
  combineReducers,
  createStore,
  applyMiddleware,
  Action,
  compose,
} from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { news } from "./news/reducer";
import { user } from "./user/reducer";

const rootReducer = combineReducers({
  news: news,
  user: user,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(thunk),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      )
    : applyMiddleware(thunk)
);
