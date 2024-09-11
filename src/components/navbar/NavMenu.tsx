import { HeartIcon, HouseIcon } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import Link from 'next/link';

export const NavMenu = ({ mobileOnly }: { mobileOnly?: boolean }) => {
  const menuList = [
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
  ];

  if (mobileOnly) {
    return (
      <div className="block lg:hidden">
        <MobileNavMenu menuList={menuList} />
      </div>
    );
  }

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <DesktopNavMenu menuList={menuList} />
      </div>

      {/* Mobile Version */}
      <div className="block lg:hidden">
        <MobileNavMenu menuList={menuList} />
      </div>
    </>
  );
};

const DesktopNavMenu = ({ menuList }: { menuList: any[] }) => {
  return (
    <div className="flex flex-row items-center">
      {menuList.map((menu, index) => (
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
  );
};

const MobileNavMenu = ({ menuList }: { menuList: any[] }) => {
  return (
    <div className="z-10 fixed bottom-0 left-0 w-full p-4 grid grid-cols-2 place-items-center bg-white text-black">
      {menuList.map((menu, index) => (
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
  );
};
