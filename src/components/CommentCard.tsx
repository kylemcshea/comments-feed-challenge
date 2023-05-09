import React from "react";
import { Comment } from "./CommentsFeed";
import { useCommentCard } from "../hooks/useCommentCard";

const CommentCard: React.FC<Comment> = ({ id, name, message, created }) => {
  const { dayOfWeek, time } = useCommentCard({ created });

  return (
    <div
      data-id={id}
      className="bg-white border border-gray-300 rounded shadow-md p-4 my-4"
    >
      <p className="text-base leading-6 mb-4">{message}</p>
      <div className="flex justify-between text-sm leading-6">
        <span className="font-semibold">
          {name} on {dayOfWeek} at {time}
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
