import React from "react";
import { Comment } from "./Comment";
import { useComments } from "../hooks/useComments";

export const CommentThread: React.FC = () => {
  const [comments,] = useComments();
  return (
    <div>
      {comments?.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};
