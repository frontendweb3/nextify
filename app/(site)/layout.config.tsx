import type { DocsLayoutProps } from 'fumadocs-ui/layout';
import { docs } from '@/utils/source';
import { Logo } from '@/components/Logo/Logo';
import type { HomeLayout } from '@/utils/types';
import { Github, Facebook, Globe, Twitter } from 'lucide-react';

// shared configuration for site (home layout)
export const baseOptions: HomeLayout = {
  nav: {
    title: (<Logo />),
    transparentMode: 'top'
  },
  links: [
    { url: "/", text: "Home", active: 'nested-url' },
    { url: "/docs/get-started/introduction", text: "Documatation" },
    { url: "/blog", text: "Blog" },
    { url: "/page/about", text: "About" },
    { url: "/page/changelog", text: "ChangeLog" },
    { url: "https://github.com/frontendweb3/Nextify", text: "Github", type: 'icon', icon: <Github /> },
    { url: "https://twitter.com/Official_R_deep", text: "Twitter", type: 'icon', icon: <Twitter /> }
  ],
  BlogNav: [
    { name: "Computer Science", url: "/blog/tag/computer-science" },
    { name: "Photography", url: "/blog/tag/photography" },
    { name: "Programming", url: "/blog/tag/programming" }
  ],
  tags: {
    title: "Our tag here"
  },
  social: [{
    icon: <Github />,
    name: "Github",
    url: "https://github.com/officialrajdeepsingh"
  },
  {
    icon: <Facebook />,
    name: "Facebook",
    url: "https://www.facebook.com/officialrajdeepsingh"
  },
  {
    icon: <Globe />,
    name: "Website",
    url: "https://officialrajdeepsingh.dev"
  }],
  faqs: [
    {
      key: 1,
      question: "How this theme is different from others in market?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      key: 2,
      question: "What is your policy on distribution of Devjoy assets?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      key: 3,
      question: "How can I contribute to Devjoy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      key: 4,
      question: "What other themes do you have?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
  ]
};

// site layout configuration
export const siteOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: docs.pageTree,
};
