import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import CommentCard from "./CommentCard";
import { useCommentsFeed } from "../hooks/useCommentsFeed";
import NoCommentsCard from "./NoCommentsCard";

export type Comment = {
  id: number;
  name: string;
  message: string;
  created: string;
};

export type CommentFetchResponse = Comment[];

const CommentsFeed: React.FC = () => {
  const { data, isLoading, isError } = useCommentsFeed();

  if (isLoading) return <LoadingSpinner />;

  // TODO: Handle error state
  if (isError) return <div role="alert">Error fetching comments</div>;

  return (
    <ul>
      {data && data.length > 0 ? (
        data.map((comment: Comment) => (
          <li key={comment.id}>
            <CommentCard {...comment} />
          </li>
        ))
      ) : (
        <NoCommentsCard />
      )}
    </ul>
  );
};

export default CommentsFeed;
