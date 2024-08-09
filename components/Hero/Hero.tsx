import Link from "next/link"

export function Hero() {
  return (
    <header className="mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-20">
        <h1 className="mb-6  text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
          Create your ideal documentation website effortlessly with the Nextify
        </h1>
        <div className="flex items-stretch mt-5">
          <Link
            href="/docs/get-started/introduction"
            className="mr-6 rounded-md text-fd-primary-foreground bg-fd-primary border border-solid border-black  px-8 py-4 font-semibold lg:mr-8"
          >
            Get Started
          </Link>
          <Link
            target="_blank"
            href="https://github.com/frontendweb3/Nextify"
            className="flex items-center justify-center rounded-md border border-solid bg-fd-primary-foreground text-fd-primary border-black  px-6 py-3 font-bold"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  )
}
