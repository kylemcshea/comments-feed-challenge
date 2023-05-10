import { CommentFetchResponse } from "../components/CommentsFeed";
import { CreateCommentFormInputs } from "../components/CreateComment";
import { CREATE_COMMENT, GET_COMMENTS } from "./routes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getComments = (): Promise<CommentFetchResponse> =>
  axios.get<CommentFetchResponse>(GET_COMMENTS).then((res) => res.data);

export const createComment = (
  reqBody: CreateCommentFormInputs
): Promise<void> => axios.post(CREATE_COMMENT, reqBody).then((res) => res.data);
