"use client";
import Image from "next/image";
import Link from "next/link";
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';

function Header() {
  return (
    <header>
      <Link href='/ '>
        <Image
          src="https://links.papareact.com/208"
          alt="Logo"
          width={150}
          height={150}
          className="object-contain mr-10 "
        />
      </Link>

      <div>
        <form action="">
            <div>
                <div>
                    <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
                </div>
            </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
