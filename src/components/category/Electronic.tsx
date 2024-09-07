import { Refrigerator } from 'lucide-react';
import { Badge } from '../@shadcn-ui/badge';

export const ElectronicCategory = () => {
  return (
    <Badge
      variant={'outline'}
      className="flex items-center gap-2 p-2 hover:bg-gray-100"
    >
      <Refrigerator size={18} color="cyan" />
      Electronic
    </Badge>
  );
};
