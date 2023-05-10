import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import CommentCard from "./CommentCard";
import {
  useCommentsFeed,
  CommentFetchResponse,
} from "../hooks/useCommentsFeed";
import CommentsNoticeCard from "./CommentsNoticeCard";
import InfiniteScroll from "./InfiniteScroll";

export type Comment = CommentFetchResponse[number];

const CommentsFeed: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useCommentsFeed();

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <CommentsNoticeCard
        message={"Uh oh! Something went wrong on our end..."}
      />
    );

  return (
    <ul>
      {data && data.pages?.flat().length > 0 ? (
        data.pages.flat().map((comment: Comment) => (
          <li key={comment.id}>
            <CommentCard {...comment} />
          </li>
        ))
      ) : (
        <CommentsNoticeCard message={"Be the first one to post a comment!"} />
      )}
      {isFetchingNextPage ? <LoadingSpinner /> : null}
      {!hasNextPage ? (
        <CommentsNoticeCard message={"No more comments to load!"} />
      ) : null}
      <InfiniteScroll
        canFetchMore={!!hasNextPage}
        isFetchingMore={isFetchingNextPage}
        fetchMore={fetchNextPage}
      />
    </ul>
  );
};

export default CommentsFeed;
