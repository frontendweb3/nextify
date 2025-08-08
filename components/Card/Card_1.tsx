import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

export function Card_1({
  title,
  author,
  date,
  url,
  category,
  image,
}: {
  title: string;
  author?: string;
  date?: Date | string | undefined;
  url: string;
  category?: string[] | undefined;
  image?: string | undefined;
}) {
  return (
    <div className="bg-fd-card shadow-sm rounded-lg border-fd-border overflow-hidden">
      <div className="relative h-80">
        {image && (
          <Image
            className="h-80 w-full object-cover"
            src={image}
            alt={title}
            height={324}
            width={324}
          />
        )}
        {category && (
          <span className="absolute shadow bottom-5 right-5 text-sm font-semibold px-2.5 py-2 rounded bg-fd-primary text-fd-primary-foreground">
            {category[0]}
          </span>
        )}
      </div>

      <div className="flex flex-col items-start py-4 px-4">
        <Link href={url} className="mb-4 text-xl font-bold md:text-2xl">
          {" "}
          {title}{" "}
        </Link>
        <div className="flex flex-row items-start text-sm lg:items-center">
          <p> Published by </p>
          {author && <p className="font-bold mx-1.5"> {author} </p>}
          {date && (
            <p className="text-sm hidden sm:inline">
              {" "}
              on {dayjs(date).format("MMMM DD, YYYY")}{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
