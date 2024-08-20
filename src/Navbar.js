import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/lead-listing" className="hover:underline">Lead Listing</Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
