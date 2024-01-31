'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Projects', 'Blog', 'Contact', 'GitHub', 'LinkedIn'];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit text-2xl">
            Dominik Croci
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="/projects"
            className="text-white text-xl"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://dominik-croci-blog.netlify.app/"
            aria-current="page"
            className="text-white text-xl"
            target="_blank"
          >
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#contact"
            className="text-white text-xl"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-[#345ff5] font-bold hover:underline"
              href={`${
                item === 'Projects'
                  ? '/projects'
                  : item === 'Blog'
                  ? 'https://dominik-croci-blog.netlify.app/'
                  : item === 'Contact'
                  ? '/#contact'
                  : item === 'GitHub'
                  ? 'https://github.com/dcroci'
                  : 'https://www.linkedin.com/in/dominikrcroci/'
              }`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
