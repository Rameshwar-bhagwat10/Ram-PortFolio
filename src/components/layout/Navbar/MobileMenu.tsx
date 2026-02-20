'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
    </div>
  );
}
