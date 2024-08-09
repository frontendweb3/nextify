'use client'

import { Logo } from '@/components/Logo/Logo'
import { House } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="w-full flex justify-center h-screen">
      <div className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <Logo className="mb-10" />
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl font-bold md:text-6xl">404 Error </h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
            {error?.message}
          </p>
          <div>
            <Link href="/" className="inline-flex items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white">
              <House className="mr-3" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
