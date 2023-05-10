import { UseQueryResult, useQuery } from "react-query";
import { CommentFetchResponse } from "../components/CommentsFeed";
import { getComments } from "../api/api";

export const useCommentsFeed = (): UseQueryResult<CommentFetchResponse> =>
  useQuery<CommentFetchResponse>("getComments", () => getComments());
