import createMDX from 'fumadocs-mdx/config';
import remarkGithub from 'remark-github'

const withMDX = createMDX({
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [[remarkGithub, { repository: "https://github.com/frontendweb3/nextify" }]]
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com"
      }
    ],
  },
};

export default withMDX(config);
