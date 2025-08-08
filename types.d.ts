import type { ReactNode } from "react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export interface TypeSocial {
  icon: ReactNode;
  name: string;
  url: string;
}

export interface TypeFAQ {
  question: string;
  answer: string;
  key: number;
}

export interface TypeBlogNav {
  name: string;
  url: string;
}

export interface HomeLayout extends BaseLayoutProps {
  card_type: {
    home: "Card_1" | "Card_2";
    tag: "Card_1" | "Card_2";
  };
  social?: TypeSocial[];
  faqs?: TypeFAQ[];
  blog_nav?: TypeBlogNav[];
}
