import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className='p-5 bg-blue-500'>
      <p className='font-bold text-white'>I am the Header</p>
      <Link></Link>
    </header>
  );
}

export default Header;
