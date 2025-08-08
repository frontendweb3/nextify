import { page } from "@/lib/source";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Fragment } from "react";
import { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const getPage = page.getPage([slug]);
  if (!getPage) notFound();
  const MDX = getPage.data.body;
  return (
    <Fragment>
      <div className="w-full max-w-4xl mx-auto py-12  md:py-16 lg:py-20">
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {getPage.data.title}
          </h1>
        </div>

        <div className="container mt-4 prose prose-gray max-w-none dark:prose-invert">
          <MDX components={{ ...defaultMdxComponents }} />
        </div>
      </div>
    </Fragment>
  );
}

export function generateStaticParams() {
  const pages = page.getPages();
  return pages.map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const getPage = page.getPage([slug]);
  if (!getPage) notFound();
  const image = slug && ["/docs-og", getPage.data.title, "image.png"].join("/");
  return {
    title: getPage.data.title,
    description: getPage.data.description,
    openGraph: {
      images: image,
    },
    bookmarks: getPage.url,
    twitter: {
      card: "summary_large_image",
      images: image,
    },
  };
}
