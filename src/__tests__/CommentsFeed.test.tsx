import { render, screen } from "@testing-library/react";
import { useCommentsFeed } from "../hooks/useCommentsFeed";
import CommentsFeed from "../components/CommentsFeed";
import { mockComments } from "../__mocks__/mockComments";

jest.mock("../hooks/useCommentsFeed");
jest.mock("../components/InfiniteScroll");

describe("[[ COMMENTS FEED ]]", () => {
  test("loading state", () => {
    (useCommentsFeed as jest.Mock).mockReturnValue({ isLoading: true });

    render(<CommentsFeed />);
    expect(screen.getByRole("status")).toHaveTextContent("Loading...");
  });

  test("error state", () => {
    (useCommentsFeed as jest.Mock).mockReturnValue({ isError: true });

    render(<CommentsFeed />);
    expect(
      screen.getByText("Uh oh! Something went wrong on our end...")
    ).toBeInTheDocument();
  });

  test("comments render", () => {
    (useCommentsFeed as jest.Mock).mockReturnValue({
      data: mockComments,
      isLoading: false,
      isError: false,
      isFetchingNextPage: true,
      hasNextPage: true,
    });

    render(<CommentsFeed />);
    expect(
      screen.getByText("Stephanie on Tuesday at 6:24 PM")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "The Yankees are my favorite team and they're off to a strong start this season. I can't wait to see what they can do in the playoffs."
      )
    ).toBeInTheDocument();
  });

  test("no comments", () => {
    (useCommentsFeed as jest.Mock).mockReturnValue({ data: [] });

    render(<CommentsFeed />);
    expect(
      screen.getByText("Be the first one to post a comment!")
    ).toBeInTheDocument();
  });
});
