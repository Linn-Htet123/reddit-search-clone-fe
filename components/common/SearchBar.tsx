"use client";

import { RefObject, useRef } from "react";
import { Input } from "@/components/ui/input";
import { SearchSuggestions } from "./SearchSuggestion";
import { useGetSuggestion } from "@/hooks/api/useGetSuggestion";
import RedditBotIcon from "../icon/RedditBotIcon";
import { useURLSearchParams } from "@/hooks/common/useSearchParams";
import { useRouter, usePathname } from "next/navigation";
import { useSearchState } from "@/hooks/common/useSearchState";
import { useSearchPill } from "@/hooks/common/useSearchPill";
import { useClickOutside } from "@/hooks/common/useClickOutside";
import { SearchPill } from "./SearchPill";
import { SearchActions } from "./SearchAction";
type Suggestion = {
  id: string;
  text: string;
  type: "subreddit" | "post" | "query";
  url: string;
};

interface SearchProps {
  placeholder?: string;
}

export default function Search({ placeholder = "Find Anything" }: SearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { setURLSearchParams, getURLSearchParams, clearURLSearchParams } =
    useURLSearchParams();
  const searchParams = getURLSearchParams();

  const containerRef = useRef<HTMLDivElement>(null);

  const {
    query,
    setQuery,
    selectedSubreddit,
    setSelectedSubreddit,
    debouncedQuery,
    selectedIndex,
    setSelectedIndex,
    isFocused,
    setIsFocused,
  } = useSearchState(searchParams.q ?? "");

  const { pillRef, pillWidth } = useSearchPill(selectedSubreddit);
  const { data, isPending } = useGetSuggestion(isFocused ? debouncedQuery : "");

  useClickOutside(containerRef as RefObject<HTMLElement>, () =>
    setIsFocused(false)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && query === "" && selectedSubreddit) {
      clearInput();
    }

    if (e.key === "Enter") {
      if (query.trim()) {
        const searchParams: Record<string, string> = {
          q: query.trim(),
        };

        setURLSearchParams(
          searchParams,
          pathname.startsWith("/r") ? "" : "/search"
        );
        setIsFocused(false);
      }
    }
  };

  const clearInput = () => {
    setQuery("");
    setSelectedSubreddit("");
    setSelectedIndex(-1);
    setIsFocused(true);
    clearURLSearchParams("/search");
  };

  const handleSelect = (item: Suggestion) => {
    if (item.type === "subreddit") {
      const targetUrl = item.url || `/r/${item.text}`;
      router.push(targetUrl);
      setQuery("");
      setIsFocused(true);
      return;
    }

    const searchParams: Record<string, string> = {
      q: item.text,
    };

    setQuery(item.text);
    setURLSearchParams(
      searchParams,
      pathname.startsWith("/r") ? "" : "/search"
    );
    setIsFocused(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <RedditBotIcon />
      </div>

      {selectedSubreddit && (
        <SearchPill
          subreddit={selectedSubreddit}
          onClear={clearInput}
          pillRef={pillRef as React.RefObject<HTMLDivElement>}
        />
      )}

      <Input
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        placeholder={
          selectedSubreddit ? `Search in r/${selectedSubreddit}` : placeholder
        }
        style={{ paddingLeft: `${pillWidth}px` }}
        className="w-full h-10 pr-24 rounded-full text-sm border border-input hover:border-primary focus-visible:border-primary focus-visible:ring-0 transition-all"
      />

      <SearchActions hasQuery={!!query} onClear={clearInput} />

      {!isPending && isFocused && (
        <SearchSuggestions
          searchQuery={debouncedQuery}
          suggestions={data || []}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          className="absolute z-50 mt-2 w-full border bg-background rounded-xl shadow-lg overflow-hidden"
        />
      )}
    </div>
  );
}
