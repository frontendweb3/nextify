import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

// You can customise Zod schemas for frontmatter and `meta.json` here see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export const blogPosts = defineDocs({
  dir: "content/blog",
  docs: {
    schema: frontmatterSchema.extend({
      author: z
        .string({
          error: "Author is required",
        })
        .optional(),
      jobposition: z
        .string({
          error: "Define Position for author ex: CEO",
        })
        .default("CEO"),
      draft: z.boolean().default(false),
      date: z.date().optional(),
      tags: z.string().array().optional(),
      image: z.string().optional(),
      category: z.string().array().optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      author: z.string().optional(),
      date: z.string().date().or(z.date()).optional(),
      tags: z.string().array().optional(),
      image: z.string().trim().optional(),
      category: z.string().array().optional(),
    }),
  },
});

export const pagesPosts = defineDocs({
  dir: "content/pages",
  docs: {
    schema: frontmatterSchema.extend({
      author: z.string().optional(),
      date: z.string().date().or(z.date()).optional(),
      tags: z.string().array().optional(),
      image: z.string().trim().optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      author: z.string().optional(),
      date: z.string().date().or(z.date()).optional(),
      tags: z.string().array().optional(),
      image: z.string().trim().optional(),
    }),
  },
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    // MDX options
  },
});
