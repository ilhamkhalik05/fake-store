import { Heart } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export function AddToWishlistButton() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Heart size={20} />
      </TooltipTrigger>
      <TooltipContent className='mb-0.5'>
        <p>Add to wishlist</p>
      </TooltipContent>
    </Tooltip>
  );
}
