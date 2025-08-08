import Link from "next/link";
import { Metadata } from "next";

export default function HomePage() {
  return (
    <main className="mt-24">
      <div className="mx-auto h-[70vh] max-w-6xl justify-center px-5 py-16 md:px-10 md:py-20">
        <h1 className="mb-6 text-center text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
          Hello World
        </h1>
        <p className="text-center">
          You can open{" "}
          <Link
            href="/docs"
            className="text-fd-foreground font-semibold underline"
          >
            /docs
          </Link>{" "}
          and see the documentation.
        </p>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title: "Nextify - Home",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper nunc sit amet dui vulputate, at dictum velit egestas.",
  openGraph: {
    images: ["/docs-og", "image.png"].join("/"),
  },
  twitter: {
    card: "summary_large_image",
    images: ["/docs-og", "image.png"].join("/"),
  },
};
