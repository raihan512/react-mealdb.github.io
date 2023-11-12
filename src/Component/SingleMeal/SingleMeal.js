import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleMeal = () => {
  const meal = useLoaderData();
  const { strCategory, strMealThumb } = meal.meals[0];

  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h2>{strCategory}</h2>
    </div>
  );
};

export default SingleMeal;
