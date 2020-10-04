import React from "react";
import { Post } from "../store/news/types";

interface Props {
  post: Post;
}

export const NewsRow: React.FC<Props> = ({ post }) => {
  return (
    <tr>
      <td>{post.title}</td>
      <td>{post.description}</td>
    </tr>
  );
};
