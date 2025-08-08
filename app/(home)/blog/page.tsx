import { baseOptions } from "@/app/(home)/layout.config";
import { Card_1 } from "@/components/Card/Card_1";
import { Card_2 } from "@/components/Card/Card_2";
import { blog } from "@/lib/source";
import type { Metadata } from "next";
import Link from "next/link";

export default function page() {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );
  const { blog_nav, card_type } = baseOptions;

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <div className="text-center mb-12">
        <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
          The latest and greatest news
        </h2>
        <p className="mt-2">Lorem ipsum dolor sit amet elit ut aliquam</p>
        <div className="my-10 md:my-20 flex flex-col md:flex-row justify-center gap-3">
          {blog_nav &&
            blog_nav.map((nav) => (
              <Link
                href={nav.url}
                key={nav.url}
                className="px-4 py-2 bg-fd-primary text-fd-primary-foreground font-semibold rounded-full"
              >
                {nav.name}
              </Link>
            ))}
        </div>
      </div>

      {/* Blog Content */}

      <div className="max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-1 gap-6 mb-6">
          {posts.map((post, index) =>
            card_type.home === "Card_2" ? (
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
    </section>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title: "Blog - Nextify",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper nunc sit amet dui vulputate, at dictum velit egestas.",
  openGraph: {
    images: ["/docs-og", "Blog - Nextify", "image.png"].join("/"),
  },
  twitter: {
    card: "summary_large_image",
    images: ["/docs-og", "Blog - Nextify", "image.png"].join("/"),
  },
};
