import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="container mx-auto">
        <div className="flex justify-between py-5 md:py-10">
          <Link to="/" className="text-2xl md:text-3xl font-bold">
            Tasty HUT
          </Link>
          <div className="flex">
            <Link
              to="/"
              className="text-lg uppercase ml-5 font-semibold hover:text-[#ff0000]"
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-lg uppercase ml-5 font-semibold hover:text-[#ff0000]"
            >
              Categories
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
