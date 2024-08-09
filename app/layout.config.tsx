import type { DocsLayoutProps } from 'fumadocs-ui/layout';
import type { HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { docs } from '@/utils/source';
import { Logo } from '@/components/Logo/Logo';
// import { NavChildren } from "@/components/NavChildren/NavChildren"
import type { ReactNode } from "react";
import { Github, Facebook, Globe, BookIcon} from 'lucide-react';


interface HomeLayout extends HomeLayoutProps {
  social?: { icon: ReactNode; name: string; url: string }[];
}
// shared configuration
export const baseOptions: HomeLayout = {
  nav: {
    title: (<Logo />),
    transparentMode: 'top',
  },
   links: [
    {
      icon: <BookIcon />,
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
    {
      text: 'GitHub',
      url: '/showcase',
      icon: <Github />,
    },
  ]
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: docs.pageTree,
};
