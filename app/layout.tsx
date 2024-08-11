import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { baseUrl, createMetadata } from '@/utils/metadata';


export const metadata = createMetadata({
  title: {
    template: '%s | Nextify',
    default: 'Nextify',
  },
  description: 'Nextify is a prebuilt template for building documentation sites using Next.js and Fumadocs.',
  metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <RootProvider> {children} </RootProvider>
      </body>
    </html>
  );
}
