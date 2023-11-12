import React, { useEffect, useState } from "react";
import Category from "../../Category/Category";
import { Link } from "react-router-dom";

const HomeFoods = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <section className="container mx-auto py-20">
      <h2 className="pb-10 md:pb-20 text-center font-bold text-2xl md:text-4xl">
        Your Favourite Food
      </h2>
      <div className="grid grid-cols-2 gap-5">
        {categories.splice(0, 6).map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="text-xl text-white hover:text-[#ff0000] bg-[#FFC107] px-10 py-3 border-2 hover:border-[#ff0000] hover:bg-transparent">
          <Link to="/categories">Show All</Link>
        </button>
      </div>
    </section>
  );
};

export default HomeFoods;
