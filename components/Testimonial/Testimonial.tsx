import React from 'react'
import Image from 'next/image';

export function Testimonial() {
  const testimonial = [
    {  key: 1, name: "David James", title: "CEO / Chairman", message: "Cras consectetur ornare id orci nisi, arcu, sagittis sit erat. Viverra ut ultricies aliquam senectus lectus non. Magna facilisis venenatis lectus pulvinar nec.", image: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg" },
    {  key: 2, name: "Spencer Quick", title: "CEO/ Cofounder", message: "Cras consectetur ornare id orci nisi, arcu, sagittis sit erat. Viverra ut ultricies aliquam senectus lectus non. Magna facilisis venenatis lectus pulvinar nec.", image: "https://images.pexels.com/photos/5439472/pexels-photo-5439472.jpeg" },
    {  key: 3, name: "Shane Dodge", title: "CEO/ Founder", message: "Cras consectetur ornare id orci nisi, arcu, sagittis sit erat. Viverra ut ultricies aliquam senectus lectus non. Magna facilisis venenatis lectus pulvinar nec.", image: "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg" },
    {  key: 4, name: "Hal Parks", title: "CEO", message: "Cras consectetur ornare id orci nisi, arcu, sagittis sit erat. Viverra ut ultricies aliquam senectus lectus non. Magna facilisis venenatis lectus pulvinar nec.", image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg" },
    {  key: 5, name: "Dan Goodwin", title: "CEO", message: "Cras consectetur ornare id orci nisi, arcu, sagittis sit erat. Viverra ut ultricies aliquam senectus lectus non. Magna facilisis venenatis lectus pulvinar nec.", image: "https://images.pexels.com/photos/2883383/pexels-photo-2883383.jpeg" }
  ]

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading Text */}
        <h2 className="mx-auto mb-6 w-full max-w-3xl text-center text-3xl font-semibold md:mb-12  md:text-5xl">
          What our clients are saying
        </h2>
        {/* Testimonial Wall */}

        <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
          {
            testimonial.map(item => <Item key={item.key} title={item.title} message={item.message} name={item.name} image={item.image} />)
          }
        </div>
      </div>
    </section>
  )
}


function Item({ title, message, name, image }: { name: string; message: string; title: string, image: string }) {
  return (

    <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-fd-card p-8">
      <div className="mb-4 flex flex-row">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h6 className="text-base font-semibold text-fd-card-foreground">{name} </h6>
          <p className="text-sm text-fd-card-foreground">{title}</p>
        </div>
      </div>
      <p className="mb-4 text-sm text-fd-card-foreground "> {message} </p>
    </div>

  )
}
