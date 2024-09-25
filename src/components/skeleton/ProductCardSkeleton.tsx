import { Skeleton } from '../@shadcn-ui/skeleton';

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col w-52 h-72 rounded-xl">
      {/* Product Image */}
      <div className="h-1/2">
        <Skeleton className="size-full rounded-2xl" />
      </div>

      {/* Product Content */}
      <div className="h-1/2 mt-1.5 space-y-1 px-1">
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-4/5 h-3" />

        <div className="flex justify-between mt-2">
          <Skeleton className="h-3 w-1/5" />
          <Skeleton className="h-3 w-1/5" />
        </div>
      </div>
    </div>
  );
}
