import { CreateCommentFormInputs } from "../components/CreateComment";
import { CommentFetchResponse } from "../hooks/useCommentsFeed";
import {
  CREATE_COMMENT,
  GET_COMMENTS,
  GET_COMMENTS_PAGINATION,
} from "./routes";
import axios from "axios";

const LOCAL_HOST = "http://localhost:3001";

axios.defaults.baseURL = import.meta.env.API_URL || LOCAL_HOST;

export const getComments = (): Promise<CommentFetchResponse> =>
  axios.get<CommentFetchResponse>(GET_COMMENTS).then((res) => res.data);

export const getCommentsPagination = (
  pageParam: number
): Promise<CommentFetchResponse> =>
  axios
    .post<CommentFetchResponse>(GET_COMMENTS_PAGINATION, { pageParam })
    .then((res) => res.data);

export const createComment = (
  reqBody: CreateCommentFormInputs
): Promise<void> => axios.post(CREATE_COMMENT, reqBody).then((res) => res.data);
