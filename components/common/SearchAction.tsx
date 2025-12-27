import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import AskIcon from "../icon/AskIcon";

interface SearchActionsProps {
  hasQuery: boolean;
  onClear: () => void;
}

export function SearchActions({ hasQuery, onClear }: SearchActionsProps) {
  return (
    <div className="flex items-center absolute right-2 top-1/2 -translate-y-1/2 gap-1">
      {hasQuery && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onClear}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      <Separator orientation="vertical" className="h-5" />
      <Button variant="ghost" size="sm" className="gap-2">
        <AskIcon />
        <span>Ask</span>
      </Button>
    </div>
  );
}
