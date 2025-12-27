import { useRef, useState, useLayoutEffect } from "react";

export function useSearchPill(selectedSubreddit: string) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [pillWidth, setPillWidth] = useState(48);

  useLayoutEffect(() => {
    if (selectedSubreddit && pillRef.current) {
      setPillWidth(pillRef.current.offsetWidth + 48);
    } else {
      setPillWidth(48);
    }
  }, [selectedSubreddit]);

  return { pillRef, pillWidth };
}
