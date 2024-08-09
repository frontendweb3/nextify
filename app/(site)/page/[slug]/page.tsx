import { pages } from '@/utils/source';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import Image from "next/image";

import { findNeighbour } from 'fumadocs-core/server';
// import { pageTree } from '@/utils/source';


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

  // const neighbours = findNeighbour(blog, page.url);

  // console.log("neighbours :", neighbours)

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

        <div className="mt-16 prose prose-gray max-w-none dark:prose-invert">
          <page.data.exports.default />
        </div>
      </div>
    </>)
}
