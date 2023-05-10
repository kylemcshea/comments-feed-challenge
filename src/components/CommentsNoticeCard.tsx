import React from "react";
import messenger from "../assets/messenger.png";

type CommentsNoticeCardProps = {
  message: string;
};

const CommentsNoticeCard: React.FC<CommentsNoticeCardProps> = ({ message }) => {
  return (
    <div className="p-4 my-8 mx-auto">
      <img src={messenger} alt="Messenger" className="w-16 h-16 mx-auto" />
      <p className="text-base leading-6 text-center my-4">{message}</p>
    </div>
  );
};

export default CommentsNoticeCard;
