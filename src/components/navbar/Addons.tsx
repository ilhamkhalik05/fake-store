'use client';

import { BellRing, ShoppingCartIcon } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../@shadcn-ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../@shadcn-ui/avatar';
import { useAuth } from '@/hooks/useAuth';
import { UserMenu } from './UserMenu';

export const Addons = () => {
  const { session, status } = useAuth();
  return (
    <div className="flex items-center gap-2">
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <BellRing size={18} />
      </Button>
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <ShoppingCartIcon size={18} />
      </Button>

      {status === 'authenticated' && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="block lg:hidden">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>U</AvatarFallback>
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
