import { Addons } from './Addons';
import { Brand } from './Brand';
import { Menu } from './Menu';

export default function Navbar() {
  return (
    <nav className="p-5 flex justify-between items-center">
      <Brand />
      <Menu />
      <Addons />
    </nav>
  );
}
