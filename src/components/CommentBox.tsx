import React, { ChangeEvent, useState } from "react";
import { CommentBoxCompType, CommentType } from "../utils";
import {Comment} from "./Comment";
import { v4 as uuidv4 } from "uuid";

export const CommentBox: React.FC<CommentBoxCompType> = ({
  comments,
  setComments,
  isReply,
  showCommentBox,
  setShowCommentBox,
}) => {
  const [comment, setComment] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const addCommentHandler = () => {
    if (comment.trim() !== "") {
      const id = uuidv4();
      const timestamp = new Date();

      const newComment: CommentType = {
        id,
        userName: `Hemanth Raaj`,
        comment,
        timestamp,
        reply: [],
        likeCount: 0,
        dislikeCount: 0,
      };

      setComments((prevComments: CommentType[] | undefined) => {
        if (prevComments !== undefined) {
          return [...prevComments, newComment];
        }
      });

      setComment("");
      HideCommentHandler();
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
        <div
          id="cb-container"
          style={{ display: "flex", width: "450px", gap: "10px" }}
        >
          <input
            type="text"
            aria-label="comment-box"
            placeholder={isReply ? "Add your reply" : "Join the discussion"}
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

          {isReply && (
            <input
              type="button"
              value="Cancel"
              style={{ borderRadius: "5px", borderWidth: "1px" }}
              onClick={HideCommentHandler}
            />
          )}
        </div>
      )}

      <div>
        {comments?.map((cmt) => (
          <Comment key={cmt.id} cmt={cmt} setComments={setComments} />
        ))}
      </div>
    </div>
  );
};

// export default React.memo(CommentBox);