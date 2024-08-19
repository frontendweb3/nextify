import { Edit } from 'lucide-react';
import { DocsPage, DocsBody, DocsDescription, DocsTitle, DocsCategory } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { docs } from '@/utils/source';
import * as React from "react";
import type { Metadata } from 'next';
import { createMetadata } from '@/utils/metadata';
import { docsOptions } from '@/app/layout.config';

interface Param {
  slug: string[];
}

export default function Page({ params }: { params: Param; }): React.ReactElement {
  const page = docs.getPage(params.slug);

  if (!page) notFound();

  const { githubUrl } = docsOptions;

  const path = `content/docs/${page.file.path}`;


  const footer = (
    <a
      href={`${githubUrl}/blob/main/${path}`}
      target="_blank"
      rel="noreferrer noopener"
      className="bg-fd-primary text-fd-primary-foreground flex flex-row justify-center items-center p-2"
    >
      <Edit className="size-3 mr-2" />
      Edit on Github
    </a>
  );

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
      full={page.data.full}
      tableOfContent={{
        footer,
      }}
      tableOfContentPopover={{ footer }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description ? (
        <DocsDescription>{page.data.description}</DocsDescription>
      ) : null}
      <DocsBody>
        <page.data.exports.default />
        {page.data.index ? (
          <DocsCategory page={page} pages={docs.getPages()} />
        ) : null}
      </DocsBody>
    </DocsPage>
  );
}



export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = docs.getPage(params.slug);

  if (!page) notFound();

  const description = page.data.description ?? 'Cupidatat voluptate deserunt non ea exercitation sit consequat ullamco ex nostrud elit magna.';


  const image = {
    alt: 'Banner',
    url: `/banner.png`,
    width: 1200,
    height: 630,
  };

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: `/docs/${page.slugs.join('/')}`,
      images: image,
    },
    twitter: {
      images: image,
    },
  });
}

export function generateStaticParams(): Param[] {
  return docs.getPages().map((page) => ({
    slug: page.slugs,
  }));
}
