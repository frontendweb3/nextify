import { blog } from "@/lib/source";
import { notFound } from "next/navigation";
import { Card_1 } from "@/components/Card/Card_1";
import slugify from "slugify";
import { Metadata } from "next";
import { baseOptions } from "@/app/(home)/layout.config";
import { Card_2 } from "@/components/Card/Card_2";

function RelatedPosts(slug: string) {
  return [...blog.getPages()].filter((post) =>
    post.data?.tags?.some(
      (tag) => slugify(tag, { lower: true, strict: false }) === slug,
    ),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const relatedPosts = RelatedPosts(slug);

  if (relatedPosts === undefined || relatedPosts.length === 0) notFound();
  const getTitle = slug?.replace(/-/g, " ");

  const { card_type } = baseOptions;
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl capitalize">
        {" "}
        {getTitle}{" "}
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {relatedPosts.map((post, index) =>
          card_type.tag === "Card_2" ? (
            <Card_2
              key={`${post.url}-${index}`}
              title={post.data.title}
              author={post.data?.author}
              date={post.data?.date}
              url={post.url}
              description={post.data.description}
            />
          ) : (
            <Card_1
              key={`${post.url}-${index}`}
              title={post.data.title}
              author={post.data?.author}
              date={post.data?.date}
              url={post.url}
              category={post.data?.category}
              image={post.data?.image}
            />
          ),
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const TagsList: { slug: string }[] = [];
  blog.getPages().forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag: string) => {
        const formatTag = slugify(tag, { lower: true, trim: true });
        if (formatTag) {
          TagsList.push({ slug: formatTag });
        }
      });
    }
  });
  return TagsList;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const getTitle = slug?.replace(/-/g, " ");
  const image = ["/docs-og", slug, "image.png"].join("/");
  return {
    metadataBase: new URL("https://localhost:3000"),
    title: `${getTitle} - Nextify`,
    description: slug,
    openGraph: {
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      images: image,
    },
  };
}
