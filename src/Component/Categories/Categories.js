import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
  const allCategories = useLoaderData();
  return (
    <div className="container mx-auto my-5">
      <h2 className="mb-10 md:mb-20 text-center font-bold text-2xl md:text-4xl">
        All Category
      </h2>

      <div className="grid grid-cols-2 gap-5">
        {allCategories.categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
