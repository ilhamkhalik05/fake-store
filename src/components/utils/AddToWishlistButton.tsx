import { Heart } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '../@shadcn-ui/tooltip';

export function AddToWishlistButton() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Heart size={20} />
      </TooltipTrigger>
      <TooltipContent className="mb-0.5">
        <p>Add to wishlist</p>
      </TooltipContent>
    </Tooltip>
  );
}
