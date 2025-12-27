import { searchServices } from "@/services/search";
import { useQuery } from "@tanstack/react-query";

export const useGetSearchPost = (query: string) => {
  const { data, isPending } = useQuery({
    queryKey: ["post", query],
    queryFn: async () => searchServices.fetchSearchPosts(query),
  });

  return { data, isPending };
};
