import { Addons } from './Addons';
import { Brand } from './Brand';
import { NavMenu } from './NavMenu';

export default function Navbar() {
  return (
    <nav className="py-5 px-8 flex justify-between items-center">
      <Brand />
      <NavMenu />
      <Addons />
    </nav>
  );
}
