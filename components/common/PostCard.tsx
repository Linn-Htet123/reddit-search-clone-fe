import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatNumber, getTimeAgo } from "@/lib/utils";

interface PostData {
  id: string;
  title: string;
  excerpt: string;
  subreddit: string;
  flair: string | null;
  authorUsername: string;
  createdAt: string;
  upvotes: number;
  downvotes: number;
  commentCount: number;
}

interface PostCardProps {
  post: PostData;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const score = post.upvotes - post.downvotes;

  return (
    <div className="flex flex-col py-4 border-b hover:bg-muted/50 transition-colors cursor-pointer px-4 sm:px-0">
      <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
        <Avatar className="h-5 w-5">
          <AvatarImage
            src={`https://www.redditstatic.com/avatars/avatar_default_${(post.subreddit.length % 8) + 1}.png`}
          />
          <AvatarFallback className="bg-primary text-[10px] text-primary-foreground font-bold">
            r/
          </AvatarFallback>
        </Avatar>

        <span className="font-bold text-foreground hover:underline">
          r/{post.subreddit}
        </span>

        <span>•</span>

        <span>{getTimeAgo(post.createdAt)}</span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3
          className="text-base sm:text-lg font-medium text-foreground leading-snug mb-1"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </div>

      {post.flair && (
        <div className="mb-2">
          <Badge
            variant="secondary"
            className="text-[10px] px-1.5 h-5 rounded-sm font-normal"
          >
            {post.flair}
          </Badge>
        </div>
      )}

      <div
        className="text-sm text-muted-foreground line-clamp-2 mb-2 break-words"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />

      {/* Footer: Votes & Comments */}
      <div className="text-xs text-muted-foreground font-medium">
        <span className={score < 0 ? "text-destructive" : ""}>
          {formatNumber(score)} votes
        </span>
        {" · "}
        {formatNumber(post.commentCount)} comments
      </div>
    </div>
  );
};

export default PostCard;
