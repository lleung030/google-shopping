'use client'
import Image from 'next/image';

function Header() {
  return (
  <header>
    <Image 
        src='https://links.papareact.com/208'
        alt='Logo'
        width={150}
        height={150}
        className='object-contain mr-10 '
    />

  </header>
  )
}

export default Header
