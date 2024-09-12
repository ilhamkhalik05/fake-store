import Link from 'next/link';
import { Button } from '../@shadcn-ui/button';
import { Card } from '../@shadcn-ui/card';
import { Checkbox } from '../@shadcn-ui/checkbox';

export default function CartSummary() {
  return (
    <Card className='px-5 pt-3 pb-10'>
      <h1 className="text-lg mb-3 rounded-lg">Summary</h1>

      <div className="bg-zinc-100 text-black py-3 px-4 rounded-md flex justify-between items-center w-full">
        <h1 className="font-semibold">Total</h1>
        <span className="text-sm">$700</span>
      </div>

      <hr className="border-1 border-gray-300 my-8" />

      <div className="flex items-start gap-2 mb-2">
        <Checkbox className="size-4 mt-1" />
        <p className="text-xs md:text-sm text-left text-muted-foreground">
          You must agree to the <Link href="" className='text-blue-500 hover:underline underline-offset-2'>terms and condition</Link> before checkout these products
        </p>
      </div>

      <Button className="w-full">Checkout ({6})</Button>
    </Card>
  );
}
