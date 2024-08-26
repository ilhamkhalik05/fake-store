import { HeartIcon, HouseIcon, UserCircleIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const Menu = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Link href="/">
        <Button
          variant={'ghost'}
          size={'sm'}
          className="flex items-center gap-2.5 px-4"
        >
          <HouseIcon size={18} />
          Main
        </Button>
      </Link>

      <Link href={'/'}>
        <Button
          variant={'ghost'}
          size={'sm'}
          className="flex items-center gap-2.5 px-4"
        >
          <HeartIcon size={18} />
          Wishlist
        </Button>
      </Link>

      <Link href={'/'}>
        <Button
          variant={'ghost'}
          size={'sm'}
          className="flex items-center gap-2.5 px-4"
        >
          <UserCircleIcon size={18} />
          Profile
        </Button>
      </Link>
    </div>
  );
};
