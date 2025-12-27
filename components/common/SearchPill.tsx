import { X } from "lucide-react";

interface SearchPillProps {
  subreddit: string;
  onClear: () => void;
  pillRef: React.RefObject<HTMLDivElement>;
}

export function SearchPill({ subreddit, onClear, pillRef }: SearchPillProps) {
  return (
    <div
      ref={pillRef}
      className="absolute left-12 top-1/2 -translate-y-1/2 z-20 flex items-center bg-muted px-2 py-1 rounded-full border text-xs font-medium"
    >
      r/{subreddit}
      <button onClick={onClear} className="ml-2 hover:text-destructive">
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
