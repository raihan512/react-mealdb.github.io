import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMealThumb, strMeal } = meal;
  let link = window.location.pathname.includes("meals");
  let address;
  if (link) {
    address = `/meals/${window.location.pathname.slice(7)}/${idMeal}`;
  } else {
    address = `/categories/category/${window.location.pathname.slice(
      21
    )}/${idMeal}`;
  }
  return (
    <Link to={address}>
      <div className="border hover:shadow-md">
        <img src={strMealThumb} alt="" />
        <div className="p-2">
          <h3 className="text-xl font-semibold mt-2 mb-1">
            {strMeal.length > 25 ? strMeal.slice(0, 20) + "..." : strMeal}
          </h3>
          <button className="flex items-center text-slate-700 hover:text-[#ff0000]">
            Discover item
            <ArrowLongRightIcon className="h-6 w-6 ml-2" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Meal;
