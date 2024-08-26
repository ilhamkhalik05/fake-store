import { MenCategory } from './Men';
import { WomenCategory } from './Women';
import { JeweleryCategory } from './Jewelery';
import { ElectronicCategory } from './Electronic';

export default function Category() {
  return (
    <div className="flex flex-row gap-3 overflow-x-auto w-full">
     <ElectronicCategory/>
      <JeweleryCategory/>
      <MenCategory />
      <WomenCategory />
    </div>
  );
}

export const renderCategory = (category: string) => {
  switch (category) {
    case 'electronics':
      return <ElectronicCategory />;
    case 'jewelery':
      return <JeweleryCategory />;
    case "men's clothing":
      return <MenCategory />;
    case "women's clothing":
      return <WomenCategory />;
    default:
      return null;
  }
}