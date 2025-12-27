/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useParams } from "next/navigation";

export function useSearchState(initialQuery: string) {
  const params = useParams();
  const [query, setQuery] = useState(initialQuery);
  const [selectedSubreddit, setSelectedSubreddit] = useState<string>("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setSelectedSubreddit((params.subreddit as string) ?? "");
  }, [params.subreddit]);

  return {
    query,
    setQuery,
    selectedSubreddit,
    setSelectedSubreddit,
    debouncedQuery,
    selectedIndex,
    setSelectedIndex,
    isFocused,
    setIsFocused,
  };
}
