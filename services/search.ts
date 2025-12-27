import { api } from "@/lib/axios";

export const searchServices = {
  fetchSearchSuggestions: async (query: string) => {
    const response = await api.get("/search/suggestions", {
      params: { q: query },
    });
    return response.data;
  },

  fetchSearchPosts: async (query: string) => {
    const response = await api.get("/search", {
      params: {
        q: query,
        page: 1,
        limit: 10,
      },
    });
    return response.data;
  },
  fetchSubRedditSearchPosts: async (subreddit: string, query: string) => {
    const response = await api.get(`/search/r/${subreddit}`, {
      params: {
        q: query,
        page: 1,
        limit: 10,
      },
    });
    return response.data;
  },
};
