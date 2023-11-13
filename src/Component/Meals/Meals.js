import React from "react";
import { useLoaderData } from "react-router-dom";

import Meal from "../Meal/Meal";

const Meals = () => {
  const mealsData = useLoaderData();
  const meals = mealsData.meals;
  return (
    <div className="container mx-auto my-10">
      <h2 className="mb-10 md:mb-20 text-center font-bold text-2xl md:text-4xl">
        We have found {meals.length} {meals.length > 1 ? "items" : "item"} by
        your search {window.location.pathname.slice(7)}
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
