// components/Navbar.tsx
import React from "react";
import Image from 'next/image'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-3 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="text-lg font-bold">
          <Image src="/logo.png" alt="TTSec" width={50} height={50}></Image>
        </Link>
        <button className="md:hidden">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            ></path>
          </svg>
        </button>
        <div className="hidden md:flex md:items-center">
          <Link href="/" className="block md:inline-block mt-4 md:mt-0 mr-6">Home</Link>
          <Link href="/about" className="block md:inline-block mt-4 md:mt-0 mr-6">About</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar
