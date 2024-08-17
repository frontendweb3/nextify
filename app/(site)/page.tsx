import { Hero } from '@/components/Hero/Hero';
import { Work } from '@/components/work/work';
import { FAQ } from '@/components/FAQ/FAQ';
import { Testimonial } from '@/components/Testimonial/Testimonial';
import { baseUrl, createMetadata } from '@/utils/metadata';


export const metadata = createMetadata({
  title: {
    template: '%s | Nextify',
    default: 'Home',
  },
  description: 'Nextify is a prebuilt template for building documentation sites using Next.js and Fumadocs.',
  metadataBase: baseUrl,
});


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

