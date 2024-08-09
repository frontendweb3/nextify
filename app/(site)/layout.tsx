import type { ReactNode } from 'react';
import { Footer } from "@/components/Footer/Footer";
import { HomeLayout } from 'fumadocs-ui/home-layout';
import { baseOptions } from '@/app/(site)/layout.config';
import { Banner } from 'fumadocs-ui/components/banner';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner id="banner-1">
        I failed my way to success - Thomas Edison
      </Banner>

      <HomeLayout {...baseOptions}>
        {children}
        <Footer />
      </HomeLayout>
    </>
  );
}
