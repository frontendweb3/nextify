import { cn } from '@/utils/cn'
import React from 'react'


export function Logo({ className, width=28, height=28 }: { className?: string, width?:number; height?:number }) {
  return (
    <div className={cn("mx-auto flex flex-row items-center justify-center", className )}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98s9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z" />
      </svg>
      <p className="ml-2 text-2xl"> Nextify </p>
    </div>
  )
}
