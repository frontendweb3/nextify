import { blog } from '@/utils/source';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import Image from "next/image";
import { Share } from './share.client';
import Card from "@/components/Card/Card";

interface Param {
  slug: string;
}

export default function Page({
  params,
}: {
  params: Param;
}): React.ReactElement {

  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  let related = [...blog.getPages()].filter(function(post) {
    return (post.data.tags && page.data?.tags) && post.data?.tags.some(function(tag) {
      return page.data?.tags?.includes(tag) && page.data.title !== post.data.title;
    });
  });

  return (
    <>
      <div className="w-full max-w-4xl mx-auto py-12  md:py-16 lg:py-20">
        <div className="space-y-8">
          {
            page.data.image && <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={page.data.image}
                alt={page.data.title}
                width={1280}
                height={720}
                className="h-full w-full object-cover"
                style={{ aspectRatio: "1280/720", objectFit: "cover" }}
              />
            </div>

          }
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {page.data.title}
            </h1>
            <p className="mt-5"> {page.data?.description} </p>
          </div>

          <div className="flex flex-row justify-between items-center gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-medium">{page.data?.author}</p>
              <p className="text-sm text-muted-foreground">Published on  {dayjs(page.data?.date).format("MMMM DD, YYYY")} </p>
            </div>
            <Share url={page.url} />
          </div>
        </div>

        <div className="mt-16 prose prose-gray max-w-none dark:prose-invert">
          <InlineTOC items={page.data.exports.toc} />
          <page.data.exports.default />
        </div>
      </div>

      {
        (related !== undefined && related.length !== 0) && <div className="mt-16 max-w-6xl mx-auto">
          <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl"> Related Posts </h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {
              related.map(post => <Card
                key={post.url}
                title={post.data.title}
                author={post.data?.author}
                date={post.data?.date}
                url={post.url}
                category={post.data?.category}
                image={post.data?.image}
              />)
            }
          </div>
        </div>
      }

    </>)
}
