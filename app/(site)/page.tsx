import { Hero } from '@/components/Hero/Hero';
import { Work } from '@/components/work/work';
import { FAQ } from '@/components/FAQ/FAQ';
import { Testimonial } from '@/components/Testimonial/Testimonial';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <FAQ />
      <Testimonial />
    </>
  );
}

