import { render, screen } from "@testing-library/react";
import CommentCard from "../components/CommentCard";

jest.mock("../hooks/useCommentCard", () => ({
  useCommentCard: () => ({ dayOfWeek: "Monday", time: "12:00" }),
}));

const mockComment = {
  id: 1,
  name: "Test Name",
  message: "Test Message",
  created: "2023-05-10T12:00:00Z",
};

describe("[[ COMMENT CARD ]]", () => {
  it("renders without crashing", () => {
    render(<CommentCard {...mockComment} />);
  });

  it("comment messages render", () => {
    render(<CommentCard {...mockComment} />);
    expect(screen.getByText(mockComment.message)).toBeInTheDocument();
  });

  it("comment author + creation date/time shown in card", () => {
    render(<CommentCard {...mockComment} />);
    const { name } = { ...mockComment };
    expect(screen.getByText(`${name} on Monday at 12:00`)).toBeInTheDocument();
  });
});
