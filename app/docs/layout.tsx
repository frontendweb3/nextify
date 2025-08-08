import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      nav={{ ...baseOptions.nav, mode: "top" }}
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
