import React, { useRef, useCallback } from "react";

type InfiniteScrollProps = {
  canFetchMore: boolean;
  isFetchingMore: boolean;
  fetchMore: () => void;
};

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  canFetchMore,
  isFetchingMore,
  fetchMore,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastCommentRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && canFetchMore) fetchMore();
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingMore, canFetchMore, fetchMore]
  );

  return <div ref={lastCommentRef} />;
};

export default InfiniteScroll;
