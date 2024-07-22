export type DiscusProps = {
  name: string;
  setDiscussion: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>
}

export type ReplyType = {
  id: string;
  userName: string;
  reply: string;
  timestamp: Date;
  likeCount: number;
  dislikeCount: number;
};

export type CommentType = {
  id: string;
  userName: string;
  comment: string;
  timestamp: Date;
  reply: ReplyType[];
  likeCount: number;
  dislikeCount: number;
};

export type CommentContextType = [
  CommentType[] | undefined,
  React.Dispatch<React.SetStateAction<CommentType[] | undefined>>
];

export type ReplyBoxType = {
  reply: ReplyType[];
  setShowCommentBox: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: string;
};

export type ReplyContainerType = {
  rp: ReplyType;
  commentId: string;
};