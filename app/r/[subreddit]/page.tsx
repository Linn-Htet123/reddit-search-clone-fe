"use client";

import PostCard from "@/components/common/PostCard";
import { useGetSubredditSearchPost } from "@/hooks/api/useGetSubredditSearchPost";
import { useURLSearchParams } from "@/hooks/common/useSearchParams";
import PostSkeletons from "@/components/common/PostSkeletons";
import { useParams } from "next/navigation";

const SubredditSearchPage = () => {
  const { getURLSearchParams } = useURLSearchParams();
  const queryParams = getURLSearchParams();
  const { subreddit } = useParams<{ subreddit: string }>();
  const searchTerm = queryParams.q ?? "";

  const { data, isPending } = useGetSubredditSearchPost(subreddit, searchTerm);

  return (
    <div className="container max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 px-4 sm:px-0">
        {searchTerm ? `Results for "${searchTerm}"` : "Search Results"}
      </h1>

      <div className="flex flex-col">
        {isPending ||
          (!data && (
            <div className="space-y-4 px-4 sm:px-0">
              <PostSkeletons />
            </div>
          ))}

        {!isPending && (!data?.posts || data.posts.length === 0) && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">
              No results found for &quot;{searchTerm}&quot;
            </p>
            <p className="text-sm">Try adjusting your search terms.</p>
          </div>
        )}

        {!isPending &&
          data?.posts &&
          data.posts.length !== 0 &&
          data?.posts?.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default SubredditSearchPage;
