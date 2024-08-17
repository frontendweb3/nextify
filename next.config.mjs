import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX({
  mdxOptions: {
    lastModifiedTime: 'git',
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
