import { Checkbox } from '../@shadcn-ui/checkbox';

export const ProductsCartHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-[600]">Your Cart</h1>

      <div className="flex items-center gap-2">
        <Checkbox className="size-4" />
        <span className="text-sm text-muted-foreground">Select All</span>
      </div>
    </div>
  );
};
