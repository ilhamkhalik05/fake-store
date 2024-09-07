'use client';

import { usePathname } from 'next/navigation';
import { HeartIcon, HouseIcon, User, UserCircleIcon } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import Link from 'next/link';

export const NavMenu = () => {
  const pathname = usePathname();

  const menus = [
    {
      title: 'Home',
      icon: <HouseIcon size={24} />,
      path: '/',
    },
    {
      title: 'Wishlist',
      icon: <HeartIcon size={24} />,
      path: '/wishlist', // Not available yet
    },
    {
      title: 'Profile',
      icon: <User size={24} />,
      path: '/profile', // Not available yet
    },
  ];
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-row items-center">
        {menus.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <Button
              variant={'ghost'}
              size={'sm'}
              className="flex items-center gap-2.5 px-4"
            >
              {menu.icon}
              {menu.title}
            </Button>
          </Link>
        ))}
      </div>

      {/* Mobile Version */}
      <div className="z-10 fixed bottom-0 left-0 w-full p-4 grid grid-cols-3 place-items-center bg-white text-black lg:hidden">
        {menus.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <Button
              variant={'ghost'}
              size={'lg'}
              className={`flex flex-col items-center gap-1 text-xs hover:scale-105 hover:-translate-y-1 transition-all duration-200`}
            >
              {menu.icon}
              {menu.title}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};
