import { Logo } from "@/components/Logo/Logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/frontendweb3/Nextify",
  nav: {
    title: <Logo />,
    transparentMode: "top",
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    { url: "/", text: "Home" },
    { url: "/docs/get-started/introduction", text: "Documatation" },
    { url: "/blog", text: "Blog" },
  ],
};
