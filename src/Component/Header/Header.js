import React, { useRef, useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let mealName = inputRef.current.value;
    inputRef.current.value = "";
    navigate(`/meals/${mealName}`);
  };
  const menuLink = ["Home", "Categories"];
  return (
    <div>
      <header className="container mx-auto">
        <div className="flex justify-between items-center py-5 md:py-10">
          <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-bold">
            Tasty HUT
          </Link>
          {/* Form */}
          <form
            className="relative w-8/12 md:w-6/12 mx-auto flex items-center h-10 lg:h-12 bg-white overflow-hidden border"
            onSubmit={handleSubmit}
          >
            <MagnifyingGlassIcon className=" absolute left-0 z-50 pl-3 h-8 w-8 text-[#e1e1e1]" />
            <input
              ref={inputRef}
              type="search"
              placeholder="Search any food"
              className=" absolute left-0 w-full h-full pl-10 focus:outline-0"
            />
            <button
              type="submit"
              className="bg-[#FFC107] hover:bg-transparent absolute right-0 z-50 cursor-pointer h-full w-28 md:w-32 flex justify-center items-center text-lg lg:text-xl text-white hover:text-[#ff0000] border-l-2 hover:border-[#ff0000]"
            >
              Search
            </button>
          </form>
          {/* Form */}
          <div className="hidden md:flex">
            {menuLink.map((menuItem, i) => (
              <Link
                to={`${menuItem}`}
                className="text-md lg:text-lg uppercase ml-5 font-semibold hover:text-[#ff0000]"
                key={i}
              >
                {menuItem}
              </Link>
            ))}
          </div>
          {/* mobile nav */}
          <div className="relative md:hidden">
            <button onClick={() => setMobileNav(!mobileNav)}>
              {(mobileNav && <XMarkIcon className="h-6 w-6" />) || (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
            {mobileNav && (
              <div className="absolute top-5 right-1 bg-[#FFC107] text-white z-50">
                <div className="flex flex-col">
                  {menuLink.map((item, i) => (
                    <Link
                      to={`/${item}`}
                      key={i}
                      onClick={() => setMobileNav(!mobileNav)}
                      className="py-2 px-8 hover:bg-[#ff0000]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
