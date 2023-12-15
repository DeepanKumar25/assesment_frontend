import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link href="/">
          <p className="text-xl font-bold cursor-pointer hover:text-blue-500 transition duration-300">
            User Management
          </p>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/create">
          <div className="cursor-pointer hover:text-blue-500 transition duration-300">
            Add Details
          </div>
        </Link>
        <Link href="/users">
          <div className="cursor-pointer hover:text-blue-500 transition duration-300">
            View Users
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
