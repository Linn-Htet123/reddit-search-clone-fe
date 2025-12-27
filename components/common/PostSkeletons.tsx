import { Skeleton } from "@/components/ui/skeleton";
const PostSkeletons = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col space-y-3 py-4 border-b">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-24" /> {/* Subreddit name */}
          </div>
          <Skeleton className="h-6 w-3/4" /> {/* Title */}
          <Skeleton className="h-4 w-full" /> {/* Excerpt L1 */}
          <Skeleton className="h-4 w-5/6" /> {/* Excerpt L2 */}
          <Skeleton className="h-3 w-32 mt-2" /> {/* Footer stats */}
        </div>
      ))}
    </>
  );
};

export default PostSkeletons;
