import { Skeleton } from "../@shadcn-ui/skeleton";

export function ProductCartCardSkeleton() {
  return (
    <div className="w-full flex items-start gap-4 ps-10 pe-6 py-4">
      <Skeleton className="size-20 rounded-xl" />
      <div className="flex flex-col gap-5 size-full">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-3/5 rounded-full" />
          <Skeleton className="h-3 w-12 rounded-full" />
        </div>

        <div className="flex justify-between items-center w-full">
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}
