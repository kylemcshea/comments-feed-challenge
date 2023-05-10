import React from "react";
import messenger from "../assets/messenger.png";

const NoCommentsCard: React.FC = () => {
  return (
    <div className="p-4 my-8 mx-auto">
      <img src={messenger} alt="Messenger" className="w-16 h-16 mx-auto" />
      <p className="text-base leading-6 text-center my-4">
        Be the first one to post a comment!
      </p>
    </div>
  );
};

export default NoCommentsCard;
