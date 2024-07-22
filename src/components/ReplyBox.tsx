import React, { useState } from "react";
import { CommentType, ReplyBoxType, ReplyType } from "../utils";
import { useComments } from "../hooks/useComments";
import { useUserName } from "../hooks/useUserName";

export const ReplyBox: React.FC<ReplyBoxType> = ({
  reply,
  setShowCommentBox,
  commentId,
}) => {
  const userName = useUserName();
  const [, setComments] = useComments();
  const [replyMessage, setReplyMessage] = useState("");

  const addReplyHandler = (): void => {
    const timestamp = new Date();

    const newReply: ReplyType = {
      id: timestamp.toUTCString(),
      userName,
      timestamp,
      reply: replyMessage,
      likeCount: 0,
      dislikeCount: 0,
    };

    // console.log("newReply", newReply);

    setComments((prevComments: CommentType[] | undefined) => {
      const newReplyComments = prevComments?.map((comment) => {
        if (comment.id === commentId) {
          comment.reply.push(newReply);
        }
        return comment;
      });
      // console.log(newReplyComments);
      return newReplyComments;
    });

    setReplyMessage("");
    CancelReplyHandler();
  };

  const CancelReplyHandler = (): void => {
    setShowCommentBox(false);
  };

  return (
    <div
      id="cb-container"
      style={{ display: "flex", width: "450px", gap: "10px" }}
    >
      <input
        type="text"
        aria-label="comment-box"
        placeholder="Reply to the Comment"
        style={{
          width: "100%",
          height: "25px",
          borderRadius: "5px",
          borderWidth: "1px",
        }}
        value={replyMessage}
        onChange={(e) => setReplyMessage(e.target.value)}
      />
      <input
        type="button"
        value="Reply"
        style={{ borderRadius: "5px", borderWidth: "1px" }}
        onClick={addReplyHandler}
      />
      <input
        type="button"
        value="Cancel"
        style={{ borderRadius: "5px", borderWidth: "1px" }}
        onClick={CancelReplyHandler}
      />
    </div>
  );
};
