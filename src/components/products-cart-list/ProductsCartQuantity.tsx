'use client';

import { Minus, Plus } from 'lucide-react';

export const ProductsCartQuantity = ({
  productQuantity,
  plusProductQuantity,
}: {
  productQuantity: number;
  plusProductQuantity: () => void;
}) => {
  return (
    <div className="flex items-center gap-3 ring-1 ring-gray-300 rounded-lg px-2 py-1">
      <Minus size={20} className="text-red-500" />
      <span>{productQuantity}</span>
      <Plus size={20} className="text-black" onClick={plusProductQuantity} />
    </div>
  );
};
