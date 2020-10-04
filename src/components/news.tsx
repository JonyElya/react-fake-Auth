import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { NewsRow } from "./news-rows";

import { fetchNewsREST } from "../store/news/action";

const useNews = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsREST());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useSelector((state: RootState) => state.news);
};

export const News = () => {
  const { news, isFetching } = useNews();

  if (isFetching) {
    return <span>Fetching news</span>;
  }

  if (!news) {
    return <span>No news fetched :(</span>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {news.map((n) => (
          <NewsRow key={n.title} post={n} />
        ))}
      </tbody>
    </table>
  );
};
