import { Logo } from "@/components/Logo/Logo";
import type { HomeLayout } from "@/types";
import { Github, Facebook, Globe, Twitter } from "lucide-react";

// shared configuration for site (home layout)

export const baseOptions: HomeLayout = {
  githubUrl: "https://github.com/frontendweb3/Nextify",
  nav: {
    title: <Logo />,
    transparentMode: "top",
  },
  card_type: {
    home: "Card_2",
    tag: "Card_1",
  },
  links: [
    { url: "/", text: "Home" },
    { url: "/docs/get-started/introduction", text: "Documatation" },
    { url: "/blog", text: "Blog" },
    { url: "/page/about", text: "About us" },
    { url: "/page/changelog", text: "Change log" },
    {
      url: "https://twitter.com/Official_R_deep",
      text: "Twitter",
      type: "icon",
      icon: <Twitter />,
    },
  ],
  blog_nav: [
    { name: "Computer Science", url: "/blog/tag/computer-science" },
    { name: "Photography", url: "/blog/tag/photography" },
    { name: "Programming", url: "/blog/tag/programming" },
  ],
  social: [
    {
      icon: <Github />,
      name: "Github",
      url: "https://github.com/officialrajdeepsingh",
    },
    {
      icon: <Facebook />,
      name: "Facebook",
      url: "https://www.facebook.com/officialrajdeepsingh",
    },
    {
      icon: <Globe />,
      name: "Website",
      url: "https://officialrajdeepsingh.dev",
    },
  ],
};
