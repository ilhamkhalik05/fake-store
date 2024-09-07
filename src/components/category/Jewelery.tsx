import { Diamond } from 'lucide-react';
import { Badge } from '../@shadcn-ui/badge';

export const JeweleryCategory = () => {
  return (
    <Badge
      variant={'outline'}
      className="flex items-center gap-2 p-2 hover:bg-gray-100"
    >
      <Diamond size={18} color="purple" />
      Jewelery
    </Badge>
  );
};
