"use client";

import React from "react";
import { HeartIcon, LayoutGrid } from "lucide-react";
import { Button } from "../@shadcn-ui/button";
import { showUnavailableFeatureNotification } from "@/lib/notyf";
import Link from "next/link";

export const NavMenu = ({ mobileOnly }: { mobileOnly?: boolean }) => {
  const menuList = [
    {
      title: "Home",
      icon: <LayoutGrid size={20} />,
      path: "/",
      available: true,
    },
    {
      title: "Wishlist",
      icon: <HeartIcon size={20} />,
      path: "/wishlist",
      available: false,
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
      {menuList.map((menu, idx) => {
        return menu.available ? (
          <Link key={idx} href={menu.path}>
            <Button variant={"ghost"} size={"sm"} className="flex items-center gap-2.5 px-4">
              {menu.icon}
              {menu.title}
            </Button>
          </Link>
        ) : (
          <Button
            className="flex items-center gap-2.5 px-4"
            variant={"ghost"}
            size={"sm"}
            onClick={() => showUnavailableFeatureNotification()}
          >
            {menu.icon}
            {menu.title}
          </Button>
        );
      })}
    </div>
  );
};

const MobileNavMenu = ({ menuList }: { menuList: any[] }) => {
  return (
    <div className="z-10 fixed bottom-0 left-0 w-full p-4 grid grid-cols-2 place-items-center bg-white text-black">
      {menuList.map((menu, index) => (
        <Link key={index} href={menu.path}>
          <Button
            variant={"ghost"}
            size={"lg"}
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
