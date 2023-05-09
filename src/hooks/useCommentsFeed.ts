import { UseQueryResult, useQuery } from "react-query";
import { CommentFetchResponse } from "../components/CommentsFeed";

export const useCommentsFeed = (): UseQueryResult<CommentFetchResponse> =>
  useQuery<CommentFetchResponse>("getComments", () =>
    fetch("http://localhost:3001/getComments").then((res) => res.json())
  );
