import { Button } from "@/components/ui/button";

import Link from "next/link";
import { FacebookIcon } from "../Icon/Faceboo";
import { InstagramIcon } from "../Icon/Instagram";
import { XIcon } from "../Icon/X";

export function Footer() {
  return (
    <footer className="w-full border-t px-4 py-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left */}
        <p className="text-sm">©Nextify 2025, All rights reserved.</p>

        {/* Right Social Icons */}
        <div className="flex flex-row items-center justify-between gap-x-4">
          <Button className="rounded-full" variant="ghost" size="icon" asChild>
            <Link href={"#"}>
              <FacebookIcon />
            </Link>
          </Button>
          <Button className="rounded-full" variant="ghost" size="icon" asChild>
            <Link href={"#"}>
              <InstagramIcon />
            </Link>
          </Button>
          <Button className="rounded-full" variant="ghost" size="icon" asChild>
            <Link href={"#"}>
              <XIcon />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
