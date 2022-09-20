import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="font-bold text-neutral-100 p-4 ,max-w-7xl mx-auto container">
        <Link href="/">
          <a className="text-base md:text-2xl">
            watch
            <span className="text-red-600">me</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
