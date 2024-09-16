
import React from 'react'
import { WorkCard } from "./work-card";


export function Work() {
  const lists: { title: string, description: string, step: number, hide? : boolean }[] = [
    {
      step: 1,
      title: "Clone Nextify Template",
      description: "Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem ipsum dolor sit amet"
    }, {
      step: 2,
      title: "Remove Old content ",
      description: "Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem ipsum dolor sit amet"
    }, {
      step: 3,
      title: "Start new content", 
      description: "Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem ipsum dolor sit amet",
      hide: false
    }]
  return (
    <section className="py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
        <p className="font-inter mb-2 text-center text-sm font-medium">
          3 EASY STEPS
        </p>
        <h1 className="text-center text-4xl font-bold lg:text-6xl">
          How it works
        </h1>
        <p className="font-inter mx-auto mb-12 mt-4 max-w-1xl px-5 text-center text-base font-light text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel lacus malesuada, fermentum nulla vehicula, convallis nibh. Nulla facilisi.
        </p>
        <div className="mt-12 flex flex-col items-start justify-center lg:flex-row">
          {
            lists.map(li => <WorkCard key={li.step} step={li.step} hide={li.hide} title={li.title} description={li.description} />)
          }
        </div>
      </div>
    </section>
  )
}

