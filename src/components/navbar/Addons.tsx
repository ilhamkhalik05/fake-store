import { BellRing, ShoppingCartIcon } from 'lucide-react';
import { Button } from '../ui/button';

export const Addons = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <BellRing size={18} />
      </Button>
      <Button variant={'outline'} size={'icon'} className="rounded-lg">
        <ShoppingCartIcon size={18} />
      </Button>
    </div>
  );
};
