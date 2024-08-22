'use client';

import { useState } from 'react';
import { Addons } from './Addons';
import { Brand } from './Brand';
import { Menu } from './Menu';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
