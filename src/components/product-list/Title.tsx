import { cn } from '@/lib/utils';

export const ProductTitle = ({
  className,
  productTitle,
}: {
  className?: string;
  productTitle: string;
}) => {
  return (
    <h1
      className={cn(
        `text-sm text-muted-foreground font-medium line-clamp-2`,
        className,
      )}
    >
      {productTitle}
    </h1>
  );
};
