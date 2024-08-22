import { HeartIcon, HouseIcon, UserCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="flex items-center">
      <Button
        variant={'ghost'}
        size={'sm'}
        className="flex items-center gap-2.5 px-4"
      >
        <HouseIcon size={18} />
        <Link href={'/'}>Main</Link>
      </Button>
      <Button
        variant={'ghost'}
        size={'sm'}
        className="flex items-center gap-2.5 px-4"
      >
        <HeartIcon size={18} />
        <Link href={'/'}>Wishlist</Link>
      </Button>
      <Button
        variant={'ghost'}
        size={'sm'}
        className="flex items-center gap-2.5 px-4"
      >
        <UserCircleIcon size={18} />
        <Link href={'/'}>Profile</Link>
      </Button>
    </div>
  );
};
