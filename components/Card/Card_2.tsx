import Link from "next/link";
import dayjs from "dayjs";
import { Fragment } from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export function Card_2({
  title,
  author,
  date,
  url,
  description,
}: {
  title: string;
  author?: string;
  date?: Date | string | undefined;
  url: string;
  description?: string;
}) {
  return (
    <Fragment>
      <Card className="flex w-full flex-col gap-2 border-b border-none p-5 pb-12 shadow">
        <div className="flex flex-row items-center gap-2 text-sm md:text-base">
          <CardDescription className="gap-2 text-sm font-semibold">
            <span>{author}</span>
            <span> - </span>
            <span>{dayjs(date).format("MMMM DD, YYYY")} </span>
          </CardDescription>
        </div>
        <Link href={url} className="underline-offset-4 hover:underline">
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </Link>
        <CardDescription className="mt-2 max-w-4xl">
          {description}
        </CardDescription>
      </Card>
      <Separator className="my-2" />
    </Fragment>
  );
}
