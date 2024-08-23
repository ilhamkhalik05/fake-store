import { Badge } from '@/components/ui/badge';
import { Diamond, Gamepad2, Refrigerator, Shirt } from 'lucide-react';

export default function Category() {
  return (
    <div className="flex flex-row gap-3 overflow-x-auto w-full">
      <Badge
        variant={'outline'}
        className="flex items-center gap-2 p-2 hover:bg-gray-100"
      >
        <Gamepad2 size={18} color="red" />
        Gaming
      </Badge>
      <Badge
        variant={'outline'}
        className="flex items-center gap-2 p-2 hover:bg-gray-100"
      >
        <Refrigerator size={18} color="cyan" />
        Electronic
      </Badge>
      <Badge
        variant={'outline'}
        className="flex items-center gap-2 p-2 hover:bg-gray-100"
      >
        <Diamond size={18} color="purple" />
        Jewelery
      </Badge>
      <Badge
        variant={'outline'}
        className="flex items-center gap-2 p-2 hover:bg-gray-100"
      >
        <Shirt size={18} color="orange" />
        Men Top
      </Badge>
      <Badge
        variant={'outline'}
        className="flex items-center gap-2 p-2 hover:bg-gray-100"
      >
        <Shirt size={18} color="pink" />
        Women Top
      </Badge>
    </div>
  );
}
