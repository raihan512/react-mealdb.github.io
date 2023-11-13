import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const SingleCategory = () => {
  const singleCategory = useLoaderData();
  const meals = singleCategory.meals;
  return (
    <div className="container mx-auto my-5">
      <h2 className="mb-5 md:mb-10 text-center font-bold text-2xl md:text-4xl">
        We have {meals.length} items in {window.location.pathname.slice(21)}{" "}
        category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
