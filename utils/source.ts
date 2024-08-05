import { createMDXSource, defaultSchemas } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { remarkImage, rehypeCode,remarkHeading } from 'fumadocs-core/mdx-plugins';
import { z } from 'zod';
import { icons } from 'lucide-react';
import { map } from '@/.map';
import { create } from '@/utils/icons';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';

const frontmatter = defaultSchemas.frontmatter.extend({
  index: z.boolean().default(false),
});


export const docs = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  remarkPlugins: [remarkImage, rehypeCode,remarkHeading],
  icon(icon) {
    if (icon && icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
  source: createMDXSource(map, {
    schema: {
      frontmatter,
    },
  })
});

export const blog = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  remarkPlugins: [remarkImage, rehypeCode,remarkHeading],
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string(),
        date: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});

export type Page = InferPageType<typeof docs>;
export type Meta = InferMetaType<typeof docs>;

