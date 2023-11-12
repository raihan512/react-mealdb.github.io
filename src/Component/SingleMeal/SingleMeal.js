import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

const SingleMeal = () => {
  const meal = useLoaderData();
  const {
    dateModified,
    strArea,
    strCategory,
    strMeal,
    strMealThumb,
    strInstructions,
    strSource,
    strTags,
    strYoutube,
  } = meal.meals[0];
  console.log(strTags);
  const getArr = (keyword) => {
    const keywordArr = [];
    for (let i = 0; i < 21; i++) {
      let keywordItem = keyword + i;
      let keywordExist = meal.meals[0][keywordItem];
      if (keywordExist !== " ") keywordArr.push(keywordExist);
      else if (!keywordExist) keywordArr.push(keywordExist);
    }
    return keywordArr;
  };

  const ingredients = getArr("strIngredient");
  const measure = getArr("strMeasure");
  console.log(meal.meals[0]);
  console.log(measure);
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-2xl font-bold mb-3 text-center">{strMeal}</h2>
      <div className="grid grid-cols-5 gap-10 mt-10">
        <img src={strMealThumb} className="col-span-2" alt="" />
        <div className="col-span-3">
          <p>
            <span className="text-lg font-semibold">Origin:</span>
            <span className="">{strArea}</span>
          </p>
          <p>
            <span className="text-lg font-semibold">Category:</span>
            <span className="">{strCategory}</span>
          </p>
          <p>
            <span className="text-lg font-semibold">Ingredients:</span>
            <span>{ingredients.join(",")}</span>
          </p>
          <p>
            <span className="text-lg font-semibold">Ingredients:</span>
            <span>{measure.join(",")}</span>
          </p>
          <button className="bg-[#ff0000] text-white py-2 px-12 mt-10">
            <Link to={strYoutube}>Watch Video</Link>
          </button>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xl font-bold border-b">Instruction</p>
        <p className="my-5">{strInstructions}</p>
        <p className="underline">
          <Link to={{ strSource }} className="flex items-center">
            <GlobeAltIcon className="h-6 w-6 mr-2" /> Source
          </Link>
        </p>
        <p>{strTags}</p>
      </div>
    </div>
  );
};

export default SingleMeal;
