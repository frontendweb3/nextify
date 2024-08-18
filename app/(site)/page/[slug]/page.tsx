import { createMetadata } from '@/utils/metadata';
import { pages } from '@/utils/source';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Param {
  slug: string;
}

export default function Page({
  params,
}: {
  params: Param;
}): React.ReactElement {

  const page = pages.getPage([params.slug]);
  if (!page) notFound();

  return (
    <>
      <div className="w-full max-w-4xl mx-auto py-12  md:py-16 lg:py-20">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {page.data.title}
            </h1>
            <p className="mt-5"> {page.data?.description} </p>
          </div>
        </div>

        <div className="mt-8 prose prose-gray max-w-none dark:prose-invert">
          <page.data.exports.default />
        </div>
      </div>
    </>)
}

export function generateStaticParams() {

  return pages.getPages().map((page) => {
    return ({
      slug: page.slugs[0],
    })
  });
}

export function generateMetadata({ params }: { params: Param }): Metadata {

  const page = pages.getPage([params.slug]);

  if (!page) notFound();

  const description = page.data.description ?? 'Cupidatat voluptate deserunt non ea exercitation sit consequat ullamco ex nostrud elit magna.';

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: `/page/${page.slugs.join('/')}`,
    }
  });
}
