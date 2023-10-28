//is this rendering everything client-side? might need to change this
// 'use client'; WILL NEED THIS LATER TO SHOW ACTIVE PAGE
//imports start
import type { Metadata } from 'next';

import Link from '../../node_modules/next/link';
import './globals.css';
import './fonts.css';
// import { usePathname } from 'next/navigation';WILL NEED THIS LATER TO SHOW ACTIVE PAGE

//imports end

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname(); WILL NEED THIS LATER TO SHOW ACTIVE PAGE
  return (
    <html lang="en">
      <body>
        <div className="gradient">
          <nav className="p-6">
            <ul className="flex justify-between text-3xl">
              <li>
                <Link href={'/'}> Dominik Croci</Link>
              </li>
              <div className="flex gap-6">
                <li>
                  <Link href={'/blog'}> Blog</Link>
                </li>
                <li>
                  <Link href={'/projects'}> Projects</Link>
                </li>
              </div>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
