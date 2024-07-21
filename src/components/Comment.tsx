import React, { useState } from "react";
import { ReplyBox } from "./ReplyBox";
import { CommentType } from "../utils";
import Reply from "./Reply";
import { useComments } from "../hooks/useComments";

export const Comment: React.FC<CommentType> = ({
  id,
  userName,
  comment,
  timestamp,
  likeCount,
  dislikeCount,
  reply,
}) => {
  const [, setComments] = useComments();

  const [showCommentBox, setShowCommentBox] = useState(false);

  const ReplyHandler = () => {
    setShowCommentBox(true);
  };

  const commentLikeDislikeHandler = (operation: string): void => {
    setComments((prevComments: CommentType[] | undefined) => {
      const newComments = prevComments?.map((comment) => {
        if (comment.id === id) {
          if (operation === "like") {
            comment.likeCount += 1;
          } else if (operation === "dislike") {
            comment.dislikeCount += 1;
          }
        }
        return comment;
      });
      return newComments;
    });
  };

  return (
    <div
      id="c-container"
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "500px",
        maxWidth: "600px",
        gap: "6px",
        margin: "15px 25px",
        border: "1px solid grey",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      <div id="c-head">
        <div id="c-name" style={{ fontWeight: "bolder" }}>
          {userName}
        </div>
        <div id="c-time" style={{ fontSize: "10px" }}>
          4 months
        </div>
      </div>
      <div id="c-body">
        <div
          id="c-message"
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "17px",
            gap: "3px",
          }}
        >
          <div>{comment}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "0px 3px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                gap: "5px",
                padding: "5px 0px",
              }}
            >
              <span style={{ width: "40px", display: "flex", gap: "3px" }}>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => commentLikeDislikeHandler("like")}
                >
                  👍
                </span>
                <span style={{ paddingTop: "1px" }}>
                  {likeCount !== 0 && likeCount}
                </span>
              </span>

              <span style={{ width: "40px", display: "flex", gap: "3px" }}>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => commentLikeDislikeHandler("dislike")}
                >
                  👎
                </span>
                <span style={{ paddingTop: "1px" }}>
                  {dislikeCount !== 0 && dislikeCount}
                </span>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "14px",
                padding: "5px 0px",
              }}
            >
              {!showCommentBox && (
                <span style={{ cursor: "pointer" }} onClick={ReplyHandler}>
                  Reply
                </span>
              )}
            </div>

            {showCommentBox && (
              <ReplyBox
                reply={reply}
                setShowCommentBox={setShowCommentBox}
                commentId={id}
              />
            )}
          </div>
          <div style={{ marginLeft: "25px" }}>
            {reply?.map((rp) => (
              <Reply key={rp.id} commentId={id} rp={rp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
