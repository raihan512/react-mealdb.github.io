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

  const getArr = (keyword) => {
    const keywordArr = [];
    for (let i = 0; i < 21; i++) {
      let keywordItem = keyword + i;
      let keywordExist = meal.meals[0][keywordItem];
      if (keywordExist) {
        if (keywordExist.length > 2) {
          keywordArr.push(keywordExist);
        }
      }
    }
    return keywordArr;
  };

  const ingredients = getArr("strIngredient");
  const measure = getArr("strMeasure");

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-2xl font-bold mb-3 text-center">{strMeal}</h2>
      <div className="flex flex-col xl:grid xl:grid-cols-5 gap-10 mt-10">
        <img src={strMealThumb} className="xl:col-span-2" alt="" />
        <div className="xl:col-span-3">
          <p className="grid grid-cols-6 gap-28 mb-3">
            <span className="text-lg font-semibold col-span-1">Origin:</span>
            <span className="col-span-5">{strArea}</span>
          </p>
          <p className="grid grid-cols-6 gap-28 mb-3">
            <span className="text-lg font-semibold col-span-1">Category:</span>
            <span className="col-span-5">{strCategory}</span>
          </p>
          <p className="grid grid-cols-6 gap-28 mb-3">
            <span className="text-lg font-semibold col-span-1">
              Ingredients:
            </span>
            <span className="col-span-5">{ingredients.join(",")}</span>
          </p>
          <p className="grid grid-cols-6 gap-28 mb-3">
            <span className="text-lg font-semibold col-span-1">Measure:</span>
            <span className="col-span-5">{measure.join(",")}</span>
          </p>
          {dateModified && (
            <p className="grid grid-cols-6 gap-28 mb-3">
              <span className="text-lg font-semibold col-span-1">Updated:</span>
              <span className="col-span-5">{dateModified}</span>
            </p>
          )}
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
