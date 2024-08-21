import React, { useEffect, useRef, useState } from "react";

import { CommentBox } from "./CommentBox";
import { CommentCompType, CommentType } from "../utils";
import thumbsDown from "../../assets/negative-vote.png";
import thumbsUp from "../../assets/thumbs-up.png";

export const Comment: React.FC<CommentCompType> = ({ cmt, setComments }) => {
  const [innerComments, setInnerComments] = useState<CommentType[] | undefined>(
    cmt.reply
  );
  const [showCommentBox, setShowCommentBox] = useState<boolean>(false);
  const [canVote, setCanVote] = useState<boolean>(true);
  const [liked, setLiked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [hasNestedComments, setHasNestedComments] = useState<boolean>(true);
  const [expandNestedComments, setExpandNestedComments] =
    useState<boolean>(true);

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

  const ShowCommentBoxHandler = (): void => {
    setShowCommentBox(true);
  };

  const ShowNestedCommentHandler = (): void => {
    setExpandNestedComments((preState) => !preState);
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

  const timeSince = (date: any) => {
    const now: any = new Date();
    const seconds = Math.floor((now - date) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return interval + (interval === 1 ? " year" : " years");
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + (interval === 1 ? " month" : " months");
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + (interval === 1 ? " day" : " days");
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + (interval === 1 ? " hour" : " hours");
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + (interval === 1 ? " minute" : " minutes");
    }
    if (Math.floor(seconds) !== 0) {
      return Math.floor(seconds) + " seconds";
    }
    return "Just now";
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
        <div id="c-name" style={cNameStyle}>
          {cmt.userName}
        </div>
        <div id="c-time" style={cTimeStyle}>
          {timeSince(cmt.timestamp)}
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
          <div style={commentOptionsOuterDivStyle}>
            <div style={commentOptionsInnerDivStyle}>
              <div style={commentOptionLeftDivStyle}>
                <span style={likeDislikeSpanStyle}>
                  <span
                    style={pointerStyle}
                    onClick={
                      canVote || !liked
                        ? () => commentLikeDislikeHandler("like")
                        : () => {}
                    }
                  >
                    <img src={thumbsUp} alt="thumbs-up" style={thumbStyle} />
                  </span>
                  <span style={likeDislikeCountStyle}>
                    {cmt.likeCount !== 0 && cmt.likeCount}
                  </span>
                </span>

                <span style={likeDislikeSpanStyle}>
                  <span
                    style={pointerStyle}
                    onClick={
                      canVote || liked
                        ? () => commentLikeDislikeHandler("dislike")
                        : () => {}
                    }
                  >
                    <img
                      src={thumbsDown}
                      alt="thumbs-down"
                      style={thumbStyle}
                    />
                  </span>
                  <span style={likeDislikeCountStyle}>
                    {cmt.dislikeCount !== 0 && cmt.dislikeCount}
                  </span>
                </span>
              </div>

              <div style={replyDivStyle}>
                {!showCommentBox && (
                  <span style={pointerStyle} onClick={ShowCommentBoxHandler}>
                    Reply
                  </span>
                )}
              </div>
            </div>
            {hasNestedComments && cmt.reply[0] && (
              <div style={showLessMoreStyle}>
                {!showCommentBox && (
                  <span style={pointerStyle} onClick={ShowNestedCommentHandler}>
                    {`Show ${expandNestedComments ? "less" : "more"}...`}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <CommentBox
          comments={innerComments}
          setComments={setInnerComments}
          isReply={true}
          showCommentBox={showCommentBox}
          setShowCommentBox={setShowCommentBox}
          inputRef={inputRef}
          setHasNestedComments={setHasNestedComments}
          expandNestedComments={expandNestedComments}
          parentId={cmt.parentId}
        />
      </div>
    </div>
  );
};

const pointerStyle = { cursor: "pointer" };
const cTimeStyle = { fontSize: "10px" };
const cNameStyle = { fontWeight: "bolder" };
const likeDislikeSpanStyle = { width: "40px", display: "flex", gap: "4px" };
const likeDislikeCountStyle = { paddingTop: "1px" };
const thumbStyle = { width: "15px" };
const showLessMoreStyle = {
  display: "flex",
  fontSize: "12px",
  padding: "5px 0px",
  alignItems: "center",
  letterSpacing: "-0.25px",
};
const replyDivStyle = {
  display: "flex",
  fontSize: "14px",
  padding: "5px 0px",
};
const commentOptionsOuterDivStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "15px",
};
const commentOptionsInnerDivStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  margin: "0px 3px",
};
const commentOptionLeftDivStyle = {
  display: "flex",
  fontSize: "14px",
  gap: "5px",
  padding: "5px 0px",
};
