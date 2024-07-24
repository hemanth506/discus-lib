export type CommentType = {
  id: string;
  userName: string;
  comment: string;
  timestamp: Date;
  reply: CommentType[];
  likeCount: number;
  
  dislikeCount: number;
};

export type CommentContextType = [
  CommentType[] | undefined,
  React.Dispatch<React.SetStateAction<CommentType[] | undefined>>
];