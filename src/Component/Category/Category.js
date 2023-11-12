import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { strCategoryThumb, strCategoryDescription, strCategory } = category;
  return (
    <Link to={`/categories/category/${strCategory}`}>
      <div className="grid grid-cols-5 gap-10 p-2 border hover:border-[#ff0000]">
        <div className="col-span-2 h-48 flex items-center">
          <img src={strCategoryThumb} alt="" />
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-3">{strCategory}</h2>
          <p className="text-lg">
            {strCategoryDescription.length > 100
              ? strCategoryDescription.slice(0, 100) + "..."
              : strCategoryDescription}
          </p>
          <button className="flex items-center ml-auto mt-5 text-slate-700 hover:text-[#ff0000]">
            See all item
            <ArrowLongRightIcon className="h-6 w-6 ml-2" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Category;
