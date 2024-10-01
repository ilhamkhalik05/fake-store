"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../@shadcn-ui/button";
import { showUnavailableFeatureNotification } from "@/lib/notyf";

export const AddToCartButton = () => {
  return (
    <Button
      variant={"outline"}
      className="w-full flex items-center gap-2.5"
      onClick={() => showUnavailableFeatureNotification()}
    >
      <ShoppingCartIcon size={18} />
      Add to Cart
    </Button>
  );
};
