import { blog } from '@/utils/source';
import { notFound } from 'next/navigation';
import Card from "@/components/Card/Card";
import slugify from 'slugify';
import type { BlogPage } from '@/utils/source';
interface Param {
  slug: string;
}

export default function Page({
  params,
}: {
  params: Param;
}): React.ReactElement {

  let relatedPosts: BlogPage[] = [...blog.getPages()].filter(function(post) {
    return post.data.tags && post.data?.tags.some(function(tag) {
      let tagSlugify = slugify(tag, {
        lower: true,
        strict: false
      })
      return tagSlugify === params.slug
    });
  });

  if (relatedPosts === undefined || relatedPosts.length === 0) notFound();

  return (<div className="mt-20 max-w-6xl mx-auto">
    <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl capitalize">{params.slug.replace(/-/g, " ")}</h1>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {
        relatedPosts.map(post => <Card
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
  </div>)

}
