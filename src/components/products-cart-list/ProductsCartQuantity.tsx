import { Minus, Plus } from "lucide-react";

export const ProductsCartQuantity = () => {
  return (
    <div className="flex items-center gap-3 ring-1 ring-gray-300 rounded-lg px-2 py-1">
      <Minus size={20} className="text-red-500" />
      <span>0</span>
      <Plus size={20} className="text-black" />
    </div>
  );
};
