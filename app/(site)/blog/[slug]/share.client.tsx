'use client';

import { Provider, TooltipContent, Tooltip, TooltipTrigger } from '@radix-ui/react-tooltip';
import { useState } from 'react';

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
          <TooltipTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            onClick={onClick}>
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" x2="12" y1="2" y2="15"></line>
              </svg>
              <span className="sr-only">Share on Twitter</span>
            </>
          </TooltipTrigger>
          <TooltipContent className="rounded-lg border bg-fd-popover p-2 text-sm text-fd-popover-foreground">
            Article URL is Copied
          </TooltipContent>
        </Tooltip>
      </Provider>
    </div>
  );
}
