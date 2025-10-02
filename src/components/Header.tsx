import React from "react";

import Link from "next/link";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="flex items-center justify-between bg-white text-black fixed w-full top-0 left-0 z-999 shadow-md h-[80px]">
      <div className="container mx-auto flex items-center justify-between h-[80px] px-4">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-bold">
            DAMPUKA
          </Link>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/buy" className="hover:underline">
                  Buy Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <FaUser />
      </div>
    </header>
  );
}

export default Header;
