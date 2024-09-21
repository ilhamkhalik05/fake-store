import { Dispatch, SetStateAction } from 'react';
import { Checkbox } from '../@shadcn-ui/checkbox';

export const ProductsCartHeader = ({
  isSelectAll,
  setIsSelectAll,
  selectAllProduct,
  unSelectAllProduct,
}: {
  isSelectAll: boolean;
  setIsSelectAll: Dispatch<SetStateAction<boolean>>;
  selectAllProduct: () => void;
  unSelectAllProduct: () => void;
}) => {
  function handleSelectAllProduct(e: any) {
    e.preventDefault();
    selectAllProduct();
    setIsSelectAll(true);
  }

  function handleUnSelectAllProduct(e: any) {
    e.preventDefault();
    unSelectAllProduct();
    setIsSelectAll(false);
  }

  return (
    <div className="flex justify-between items-center mb-4 mx-1">
      <h1 className="text-xl font-[600] tracking-widest">Your Cart</h1>
      <div className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          id="selectAll"
          className="size-4"
          checked={isSelectAll}
          onClick={
            isSelectAll ? handleUnSelectAllProduct : handleSelectAllProduct
          }
        />
        <label
          htmlFor="selectAll"
          className="text-sm text-muted-foreground cursor-pointer"
        >
          Select All
        </label>
      </div>
    </div>
  );
};
