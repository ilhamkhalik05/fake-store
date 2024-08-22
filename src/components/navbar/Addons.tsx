import { BellRing, MenuIcon, ShoppingCartIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Menu } from './Menu';

export const Addons = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <BellRing size={18} />
      </Button>
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <ShoppingCartIcon size={18} />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="lg:hidden bg-gray-700 rounded-lg"
            variant={'default'}
            size={'icon'}
          >
            <MenuIcon size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-8 mt-2">
          <Menu className="flex flex-col items-start" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
