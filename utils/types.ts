import type { ReactNode } from "react";
import type { HomeLayoutProps } from 'fumadocs-ui/home-layout';


export interface TypeSocial {
  icon: ReactNode; name: string; url: string
}


export interface TypeFAQ {
  question: string; answer: string, key: number
}

export interface TypeBlogNav {
  name: string; url: string
}


export interface HomeLayout extends HomeLayoutProps {
  social?: TypeSocial[];
  faqs?: TypeFAQ[]
  BlogNav?: TypeBlogNav[]
}
