import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import CommentCard from "./CommentCard";
import { useCommentsFeed } from "../hooks/useCommentsFeed";
import CommentsNoticeCard from "./CommentsNoticeCard";

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
  if (isError)
    return (
      <CommentsNoticeCard
        message={"Uh oh! Something went wrong on our end..."}
      />
    );

  return (
    <ul>
      {data && data.length > 0 ? (
        data.map((comment: Comment) => (
          <li key={comment.id}>
            <CommentCard {...comment} />
          </li>
        ))
      ) : (
        <CommentsNoticeCard message={"Be the first one to post a comment!"} />
      )}
    </ul>
  );
};

export default CommentsFeed;
