import { LogOut, User } from 'lucide-react';
import { Button } from '../@shadcn-ui/button';
import Link from 'next/link';

export const UserMenu = () => {
  return (
    <div className="flex flex-col m-1">
      <Link href="/">
        <Button
          variant={'ghost'}
          size={'sm'}
          className="flex items-center gap-2.5 px-4"
        >
          <User size={20} />
          Your Account
        </Button>
      </Link>

      <hr className="border border-gray-300 mt-4 mb-2"></hr>

      <Button
        variant={'ghost'}
        size={'sm'}
        className="flex justify-start items-center gap-2.5 px-4 hover:text-red-600"
      >
        <LogOut size={18} />
        Sign out
      </Button>
    </div>
  );
};
