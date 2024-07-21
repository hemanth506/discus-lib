import React, { ChangeEvent, useState } from "react";
import { useComments } from "../hooks/useComments";
import { CommentType } from "../utils";

export const CommentBox: React.FC = () => {
  const [, setComments] = useComments();
  const [comment, setComment] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }

  const addCommentHandler = () => {
    const timestamp = new Date();
    
    const newComment: CommentType = {
      id: timestamp.toUTCString(),
      userName: `Hemanth Raaj`,
      comment,
      timestamp,
      reply: [],
      likeCount: 0,
      dislikeCount: 0,
    };

    setComments((prevComments: CommentType[] | undefined) => {
      if(prevComments !== undefined) {
        return [...prevComments, newComment]
      }
    });

    setComment("");
  };

  return (
    <div
      id="cb-container"
      style={{ display: "flex", width: "450px", gap: "10px" }}
    >
      <input
        type="text"
        aria-label="comment-box"
        placeholder="Join the discussion"
        style={{
          width: "100%",
          height: "30px",
          borderRadius: "5px",
          borderWidth: "1px",
        }}
        value={comment}
        onChange={onChangeHandler}
      />
      <input
        type="button"
        value="Comment"
        style={{ borderRadius: "5px", borderWidth: "1px" }}
        onClick={addCommentHandler}
      />
    </div>
  );
};
