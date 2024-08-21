import React, { ChangeEvent, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Comment } from "./Comment";
import { CommentBoxCompType, CommentType } from "../utils";
import { useUserName } from "../hooks/useUserName";

export const CommentBox: React.FC<CommentBoxCompType> = ({
  comments,
  setComments,
  isReply,
  showCommentBox,
  setShowCommentBox,
  inputRef,
  expandNestedComments,
  parentId,
  setExpandNestedComments
}) => {
  const userName = useUserName();
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setComment(e.target.value);
  };

  const addCommentHandler = (): void => {
    if (comment.trim() !== "") {
      const id = uuidv4();
      const timestamp = new Date();

      const newComment: CommentType = {
        id,
        userName,
        comment,
        timestamp,
        reply: [],
        likeCount: 0,
        dislikeCount: 0,
        parentId,
      };

      setComments((prevComments: CommentType[] | undefined) => {
        if (prevComments !== undefined) {
          return [...prevComments, newComment];
        }
      });

      setComment("");
      HideCommentHandler();
      if(setExpandNestedComments) {
        setExpandNestedComments(true);
      }
    }
  };

  const HideCommentHandler = (): void => {
    if (setShowCommentBox) {
      setShowCommentBox(false);
      setComment("");
    }
  };

  return (
    <div>
      {(showCommentBox || !isReply) && (
        <div id="cb-container" style={containerStyle}>
          <input
            type="text"
            aria-label="comment-box"
            placeholder={isReply ? "Add your comment" : "Join the discussion"}
            style={inputStyle}
            value={comment}
            onChange={onChangeHandler}
          />
          <input
            type="button"
            value="Comment"
            style={buttonStyle}
            onClick={addCommentHandler}
          />

          {isReply && (
            <input
              type="button"
              value="Cancel"
              style={buttonStyle}
              onClick={HideCommentHandler}
            />
          )}
        </div>
      )}

      {expandNestedComments && (
        <div>
          {comments?.map((cmt) => (
            <Comment key={cmt.id} cmt={cmt} setComments={setComments} />
          ))}
        </div>
      )}
    </div>
  );
};

const containerStyle = { display: "flex", gap: "10px" };
const inputStyle = {
  width: "100%",
  height: "30px",
  borderRadius: "5px",
  borderWidth: "1px",
};
const buttonStyle = { borderRadius: "5px", borderWidth: "1px" };
