import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto py-40 md:py-56 2xl:py-80 relative bg-cover bg-center bg-no-repeat bg-[url('https://blog.petpooja.com/wp-content/uploads/2021/11/lbbret3nermp2q23b6cx.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/75 flex justify-center items-center">
        <div className="text-center px-8">
          <h1 className="text-white text-3xl md:text-5xl 2xl:text-6xl font-bold">
            Taste Our Delicious <br /> Best Foods
          </h1>
          <p className="text-white md:text-2xl 2xl:text-3xl py-2 md:py-10 w-8/12 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humou.
          </p>

          <div className="relative md:w-8/12 mx-auto flex items-center h-12 bg-white overflow-hidden">
            <img
              src="images/search.svg"
              alt=""
              className=" absolute left-0 z-50 pl-3"
            />
            <input
              type="search"
              id="search-box"
              placeholder="Search any food"
              className=" absolute left-0 w-full h-full pl-12 focus:outline-0"
            />
            <label
              htmlFor="search-box"
              id="search-box-btn"
              className="bg-[#FFC107] hover:bg-transparent absolute right-0 z-50 cursor-pointer h-full w-28 md:w-32 flex justify-center items-center text-lg md:text-xl text-white hover:text-[#ff0000] border-l-2 hover:border-[#ff0000]"
            >
              Search
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
