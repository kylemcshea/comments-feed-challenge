import React, { useState } from "react";
import { useMutation } from "react-query";

type CreateCommentReqBody = {
  name: string;
  message: string;
};

const CreateComment: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setMessage("");
  };

  const commentMutation = useMutation((variables: CreateCommentReqBody) =>
    fetch("http://localhost:3001/createComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(variables),
    })
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !message) return;

    const requestBody = { name, message };

    resetForm();

    await commentMutation
      .mutateAsync(requestBody)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      className="space-y-4 flex flex-col justify-center mx-auto border border-gray-300 rounded-md shadow-md p-4 my-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 text-base"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 text-base h-32 resize-none"
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-400 text-black border-2 border-black font-medium py-2 px-4 rounded-md w-1/2 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateComment;
