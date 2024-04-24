//is this rendering everything client-side? might need to change this
// 'use client'; WILL NEED THIS LATER TO SHOW ACTIVE PAGE
//imports start
import type { Metadata } from 'next';
import Link from '../../node_modules/next/link';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import './fonts.css';
import { Providers } from './providers';
import NavBar from '@/components/NavBar';
// import { usePathname } from 'next/navigation';WILL NEED THIS LATER TO SHOW ACTIVE PAGE

//imports end
export const metadata: Metadata = {
  title: {
    absolute: 'Dominik Croci | Portfolio',
  },
  authors: [{ name: 'Dominik Croci' }],
  creator: 'Dominik Croci',
  description:
    'Dominik Croci Web Developer Portfolio, powered by NextJS and TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname(); WILL NEED THIS LATER TO SHOW ACTIVE PAGE
  return (
    <html lang="en" className={`${GeistSans.className} overflow-x-hidden`}>
      <body className="text-white w-full">
        <div className="gradient mx-auto w-full pt-12 px-6">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
