import type { DocsLayoutProps } from 'fumadocs-ui/layout';
import type { HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { docs } from '@/utils/source';
import { Logo } from '@/components/Logo/Logo';
import { Github, BookIcon } from 'lucide-react';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (<Logo />),
    transparentMode: 'top',
  },
  githubUrl :"https://github.com/frontendweb3/nextify",
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
