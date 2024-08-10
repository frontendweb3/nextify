import { createMDXSource, defaultSchemas } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { remarkImage, rehypeCode, remarkHeading } from 'fumadocs-core/mdx-plugins';
import { z } from 'zod';
import { icons } from 'lucide-react';
import { map } from '@/.map';
import { create } from '@/utils/icons';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';

export const docs = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  remarkPlugins: [remarkImage, rehypeCode, remarkHeading],
  icon(icon) {
    if (icon && icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        index: z.boolean().default(false),
      }),
    },
  })
});

export const blog = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  remarkPlugins: [remarkImage, rehypeCode, remarkHeading],
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string().optional(),
        date: z.string().date().or(z.date()).optional(),
        tags: z.string().array().optional(),
        image: z.string().trim().optional(),
        category:z.string().array().optional()
      })
    },
  }),
});

export const pages = loader({
  baseUrl: '/page',
  rootDir: 'pages',
  remarkPlugins: [remarkImage, rehypeCode, remarkHeading],
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string().optional(),
        date: z.string().date().or(z.date()).optional(),
        tags: z.string().array().optional(),
        image: z.string().trim().optional()
      }),
    },
  })
});

export type DocsPage = InferPageType<typeof docs>;
export type DocsMeta = InferMetaType<typeof docs>;
export type BlogPage = InferPageType<typeof blog>;
export type BlogMeta = InferMetaType<typeof blog>;


