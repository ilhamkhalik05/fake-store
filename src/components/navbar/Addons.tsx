'use client';

import { useSession } from 'next-auth/react';
import { BellRing } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../@shadcn-ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../@shadcn-ui/avatar';
import { UserMenu } from './UserMenu';
import { NavigateToCartButton } from '../utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Addons = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <BellRing size={18} />
      </Button>
      {!pathname.startsWith('/cart') && <NavigateToCartButton />}

      {!session ? (
        <Link href={'/auth'}>
          <Avatar className="cursor-pointer ml-2 size-10">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer ml-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-8 mt-2 rounded-xl z-10">
            <UserMenu />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
