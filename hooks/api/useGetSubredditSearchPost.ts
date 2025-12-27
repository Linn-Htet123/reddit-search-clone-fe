import { searchServices } from "@/services/search";
import { useQuery } from "@tanstack/react-query";

export const useGetSubredditSearchPost = (params: string, query: string) => {
  const { data, isPending } = useQuery({
    queryKey: ["post", query, params],
    queryFn: async () =>
      searchServices.fetchSubRedditSearchPosts(params, query),
  });

  return { data, isPending };
};
