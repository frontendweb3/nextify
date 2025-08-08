"use client";

import {
  Provider,
  TooltipContent,
  Tooltip,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Share2 } from "lucide-react";
import { useState } from "react";

export function Share({ url }: { url: string }): React.ReactElement {
  const [open, setOpen] = useState(false);

  const onClick = (): void => {
    setOpen(true);
    void navigator.clipboard.writeText(`${window.location.origin}${url}`);
  };

  return (
    <div>
      <Provider disableHoverableContent={true}>
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background
            transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-white h-10 w-10"
            onClick={onClick}
          >
            <Share2 />
            <span className="sr-only">Share on social media</span>
          </TooltipTrigger>
          <TooltipContent className="rounded-lg border bg-fd-popover p-2 text-sm text-fd-popover-foreground">
            Your article URL is copied.
          </TooltipContent>
        </Tooltip>
      </Provider>
    </div>
  );
}
