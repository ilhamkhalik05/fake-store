import { cn } from '@/lib/utils';
import { StarIcon } from 'lucide-react';

export const ProductRate = ({
  className,
  productRate,
}: {
  className?: string;
  productRate: number;
}) => {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <StarIcon size={15} color="orange" />
      <h1 className="text-xs text-muted-foreground font-light line-clamp-1">
        {productRate}/5
      </h1>
    </div>
  );
};
