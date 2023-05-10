import {
  UseInfiniteQueryResult,
  useInfiniteQuery,
  QueryFunction,
} from "react-query";
import { getCommentsPagination } from "../api/api";

export type Comment = {
  id: number;
  name: string;
  message: string;
  created: string;
};

export type CommentFetchResponse = Comment[];

export const useCommentsFeed = (): UseInfiniteQueryResult<
  CommentFetchResponse,
  unknown
> => {
  const fetchComments: QueryFunction<CommentFetchResponse> = async ({
    pageParam = 1,
  }) => getCommentsPagination(pageParam);

  return useInfiniteQuery<CommentFetchResponse, unknown>(
    "getCommentsPagination",
    fetchComments,
    {
      getNextPageParam: (lastPage) =>
        lastPage.length > 0 ? lastPage[lastPage.length - 1].id : null,
    }
  );
};
