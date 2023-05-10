import { render, screen } from "@testing-library/react";
import { useCommentsFeed } from "../hooks/useCommentsFeed";
import CommentsFeed from "../components/CommentsFeed";
import { mockComments } from "../__mocks__/mockComments";

jest.mock("../hooks/useCommentsFeed");

describe("[[ COMMENTS FEED ]]", () => {
  test("loading state", () => {
    (useCommentsFeed as jest.Mock).mockReturnValue({ isLoading: true });

    render(<CommentsFeed />);
    expect(screen.getByRole("status")).toHaveTextContent("Loading...");
  });

  test("error state", () => {
    (useCommentsFeed as jest.Mock).mockReturnValue({ isError: true });

    render(<CommentsFeed />);
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Error fetching comments"
    );
  });

  test("comments render", () => {
    (useCommentsFeed as jest.Mock).mockReturnValue({
      data: mockComments,
    });

    render(<CommentsFeed />);
    expect(
      screen.getByText("User 1 on Tuesday at 6:23 PM")
    ).toBeInTheDocument();
    expect(screen.getByText("hi on Wednesday at 3:02 PM")).toBeInTheDocument();
  });

  test("no comments", () => {
    (useCommentsFeed as jest.Mock).mockReturnValue({ data: [] });

    render(<CommentsFeed />);
    expect(screen.getByText("No comments")).toBeInTheDocument();
  });
});
