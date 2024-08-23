import { Addons } from './Addons';
import { Brand } from './Brand';
import { Menu } from './Menu';

export default function Navbar() {
  return (
    <nav className="py-5 px-8 flex justify-between items-center">
      <Brand />
      <div className="hidden lg:block">
        <Menu className="flex flex-row items-center" />
      </div>
      <Addons />
    </nav>
  );
}
