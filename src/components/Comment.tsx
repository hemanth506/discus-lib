import React, { useEffect, useState } from "react";
import { CommentCompType, CommentType } from "../utils";
import { CommentBox } from "./CommentBox";

export const Comment: React.FC<CommentCompType> = ({ cmt, setComments }) => {
  const [innerComments, setInnerComments] = useState<CommentType[] | undefined>(
    cmt.reply
  );
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [canVote, setCanVote] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setComments((prevComments: CommentType[] | undefined) => {
      const newComments = prevComments?.map((comment) => {
        if (comment.id === cmt.id) {
          if (innerComments !== undefined) {
            comment.reply = innerComments;
          }
        }
        return comment;
      });
      return newComments;
    });
  }, [cmt, innerComments, setComments]);

  const ShowCommentHandler = (): void => {
    setShowCommentBox(true);
  };

  const commentLikeDislikeHandler = (operation: string): void => {
    setComments((prevComments: CommentType[] | undefined) => {
      const newComments = prevComments?.map((comment) => {
        if (comment.id === cmt.id) {
          if (operation === "like") {
            comment.likeCount += 1;
            setLiked(true);
            if (!canVote) {
              comment.dislikeCount -= 1;
            }
          } else if (operation === "dislike") {
            comment.dislikeCount += 1;
            setLiked(false);
            if (!canVote) {
              comment.likeCount -= 1;
            }
          }
        }
        return comment;
      });
      return newComments;
    });
    setCanVote(false);
  };

  return (
    <div
      id="c-container"
      style={{
        display: "flex",
        flexDirection: "column",
        // minWidth: "500px",
        // maxWidth: "fit-content",
        gap: "6px",
        margin: "15px 25px",
        border: "1px solid grey",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      <div id="c-head">
        <div id="c-name" style={{ fontWeight: "bolder" }}>
          {cmt.userName}
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
          <div>{cmt.comment}</div>
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
              <span style={{ width: "40px", display: "flex", gap: "4px" }}>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={
                    canVote || !liked
                      ? () => commentLikeDislikeHandler("like")
                      : () => {}
                  }
                >
                  <img
                    src={require("../static/thumbs-up.png")}
                    alt="thumbs-up"
                    style={{ width: "15px" }}
                  />
                </span>
                <span style={{ paddingTop: "1px" }}>
                  {cmt.likeCount !== 0 && cmt.likeCount}
                </span>
              </span>

              <span style={{ width: "40px", display: "flex", gap: "4px" }}>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={
                    canVote || liked
                      ? () => commentLikeDislikeHandler("dislike")
                      : () => {}
                  }
                >
                  <img
                    src={require("../static/negative-vote.png")}
                    alt="thumbs-up"
                    style={{ width: "15px" }}
                  />
                </span>
                <span style={{ paddingTop: "1px" }}>
                  {cmt.dislikeCount !== 0 && cmt.dislikeCount}
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
                <span
                  style={{ cursor: "pointer" }}
                  onClick={ShowCommentHandler}
                >
                  Reply
                </span>
              )}
            </div>
          </div>
        </div>
        <CommentBox
          comments={innerComments}
          setComments={setInnerComments}
          isReply={true}
          showCommentBox={showCommentBox}
          setShowCommentBox={setShowCommentBox}
        />
      </div>
    </div>
  );
};
