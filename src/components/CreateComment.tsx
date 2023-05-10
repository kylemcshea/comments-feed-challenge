import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { motion } from "framer-motion";
import { z } from "zod";
import LoadingSpinner from "./LoadingSpinner";
import { createComment } from "../api/api";

const CreateCommentSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

export type CreateCommentFormInputs = z.infer<typeof CreateCommentSchema>;

const CreateComment: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CreateCommentFormInputs>({
    resolver: zodResolver(CreateCommentSchema),
  });

  const commentMutation = useMutation((variables: CreateCommentFormInputs) =>
    createComment(variables)
  );

  const onSubmit = async (data: CreateCommentFormInputs) =>
    commentMutation
      .mutateAsync(data)
      .then(() => reset())
      .catch((err) => {
        console.error(err);
      });

  const { isLoading, isError } = commentMutation;

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 flex flex-col justify-center mx-auto border border-gray-300 rounded-md shadow-md p-4 my-8 sm:my-4 md:my-4"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium mb-2">
          Name
        </label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="name"
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 text-base"
            />
          )}
        />
        {errors?.name ? (
          <p className="text-red-500">
            {errors.name.message as React.ReactNode}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium mb-2">
          Message
        </label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              {...field}
              id="message"
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2 text-base h-32 resize-none"
            />
          )}
        />
        {errors?.message ? (
          <p className="text-red-500">
            {errors.message.message as React.ReactNode}
          </p>
        ) : null}
      </div>
      <motion.button
        type="submit"
        className="bg-yellow-400 text-black border-2 border-black font-medium py-2 px-4 rounded-md w-1/2 mx-auto"
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        disabled={isLoading}
      >
        {isError ? (
          "Something went wrong..."
        ) : isLoading ? (
          <LoadingSpinner color="blue" />
        ) : (
          "Submit"
        )}
      </motion.button>
    </motion.form>
  );
};

export default CreateComment;
