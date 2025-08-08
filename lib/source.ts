import { docs, blogPosts, pagesPosts } from "@/.source";
import { loader } from "fumadocs-core/source";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs", // it assigns a URL to your pages
  source: docs.toFumadocsSource(),
});

export const blog = loader({
  baseUrl: "/blog",
  source: blogPosts.toFumadocsSource(),
});

export const page = loader({
  baseUrl: "/pages",
  source: pagesPosts.toFumadocsSource(),
});
