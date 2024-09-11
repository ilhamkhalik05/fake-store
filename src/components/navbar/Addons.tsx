'use client';

import { useSession } from 'next-auth/react';
import { BellRing, ShoppingCartIcon } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../@shadcn-ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../@shadcn-ui/avatar';
import { UserMenu } from './UserMenu';
import Link from 'next/link';

export const Addons = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <BellRing size={18} />
      </Button>
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <ShoppingCartIcon size={18} />
      </Button>

      {!session ? (
        <Link href={'/auth'}>
          <Avatar className="cursor-pointer ml-2 size-10">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
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
