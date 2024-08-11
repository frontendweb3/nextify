
import type { MetadataRoute } from 'next';
import { baseUrl } from '@/utils/metadata';
import { blog, docs, pages } from '@/utils/source';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/showcase'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url('/docs'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...docs.getPages().map<MetadataRoute.Sitemap[number]>((page) => ({
      url: url(page.url),
      lastModified: page.data.exports.lastModified
        ? new Date(page.data.exports.lastModified)
        : undefined,
      changeFrequency: 'weekly',
      priority: 0.5,
    })),
     ...blog.getPages().map<MetadataRoute.Sitemap[number]>((page) => ({
      url: url(page.url),
      lastModified: page.data.exports.lastModified
        ? new Date(page.data.exports.lastModified)
        : undefined,
      changeFrequency: 'weekly',
      priority: 0.5,
    })),
     ...pages.getPages().map<MetadataRoute.Sitemap[number]>((page) => ({
      url: url(page.url),
      lastModified: page.data.exports.lastModified
        ? new Date(page.data.exports.lastModified)
        : undefined,
      changeFrequency: 'weekly',
      priority: 0.5,
    }))
  ];
}
