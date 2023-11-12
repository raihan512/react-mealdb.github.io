import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFC107]/25 py-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-1/12">
          <h4 className="text-xl md:text-2xl font-bold">Section</h4>
          <ul className="mt-3 md:mt-10">
            <li className="md:text-xl">Home</li>
            <li className="md:text-xl">Features</li>
            <li className="md:text-xl">Pricing</li>
            <li className="md:text-xl">FAQs</li>
            <li className="md:text-xl">About</li>
          </ul>
        </div>
        <div className="w-2/12">
          <h4 className="text-xl md:text-2xl font-bold">Services</h4>
          <ul className="mt-3 md:mt-10">
            <li className="md:text-xl">UIUX Design</li>
            <li className="md:text-xl">Product Design</li>
            <li className="md:text-xl">Back End Developer</li>
            <li className="md:text-xl">Front End Developer</li>
          </ul>
        </div>
        <div className="w-2/12">
          <h4 className="text-xl md:text-2xl font-bold">Resource</h4>
          <ul className="mt-3 md:mt-10">
            <li className="md:text-xl">FAQ</li>
            <li className="md:text-xl">Support</li>
            <li className="md:text-xl">Privacy Policy</li>
            <li className="md:text-xl">Terms of Service</li>
          </ul>
        </div>
        <div className="w-4/12">
          <h4 className="text-xl md:text-2xl font-bold">
            Subscribe to our newsletter
          </h4>
          <p className="py-5">
            There are many variations of passages of available, but the majority
            have suffered
          </p>
          <div className="flex flex-wrap">
            <input
              type="search"
              id="subscribe-box"
              placeholder="Email address"
              className="p-3 focus:outline-0 mr-2"
            />
            <label
              htmlFor="subscribe-box"
              className="bg-[#FFC107] hover:bg-transparent text-white hover:text-[#ff0000] py-3 font-bold px-3 border-2 hover:border-[#ff0000] "
            >
              Subscribe
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
