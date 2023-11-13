import React, { useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
};

export default Hero;
