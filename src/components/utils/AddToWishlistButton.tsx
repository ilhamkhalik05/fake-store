import React from "react";
import { LucideHeart } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../@shadcn-ui/tooltip";
import { showUnavailableFeatureNotification } from "@/lib/notyf";

export function AddToWishlistButton() {
  return (
    <Tooltip>
      <TooltipTrigger onClick={() => showUnavailableFeatureNotification()} className="active:text-pink-400">
        <LucideHeart size={20} />
      </TooltipTrigger>
      <TooltipContent className="mb-0.5">
        <p>Add to wishlist</p>
      </TooltipContent>
    </Tooltip>
  );
}
