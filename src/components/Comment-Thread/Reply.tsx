import React from "react";
import { CommentType, ReplyContainerType } from "../../utils";
import { useComments } from "../../hooks/useComments";

const Reply: React.FC<ReplyContainerType> = ({ rp, commentId }) => {
  const [, setComments] = useComments();

  const replyLikeDislikeHandler = (operation: string): void => {
    setComments((prevComments: CommentType[] | undefined) => {
      const newReplyComments = prevComments?.map((comment) => {
        if (comment.id === commentId) {
          comment.reply.map((reply) => {
            if (reply.id === rp.id) {
              if (operation === "like") {
                reply.likeCount += 1;
              } else if (operation === "dislike") {
                reply.dislikeCount += 1;
              }
            }
            return reply;
          });
        }
        return comment;
      });

      return newReplyComments;
    });
  };

  return (
    <div key={rp.id} style={{ marginTop: "15px" }}>
      <div id="r-head">
        <div id="r-name" style={{ fontWeight: "bolder" }}>
          {rp.userName}
        </div>
        <div id="r-time" style={{ fontSize: "10px" }}>
          4 months
        </div>
      </div>
      <div id="r-body">
        <div
          id="r-message"
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "17px",
            gap: "3px",
          }}
        >
          <div>{rp.reply}</div>
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              gap: "5px",
            }}
          >
            <span style={{ width: "40px", display: "flex", gap: "3px" }}>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => replyLikeDislikeHandler("like")}
              >
                👍
              </span>
              <span style={{ paddingTop: "1px" }}>
                {rp.likeCount !== 0 && rp.likeCount}
              </span>
            </span>
            <span style={{ width: "40px", display: "flex", gap: "3px" }}>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => replyLikeDislikeHandler("dislike")}
              >
                👎
              </span>
              <span style={{ paddingTop: "1px" }}>
                {rp.dislikeCount !== 0 && rp.dislikeCount}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Reply);
