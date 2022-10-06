import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ItemRecipe = () => {
    const reciepe = useLoaderData().meals[0];
    const { strMeal, strMealThumb, strArea, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strCategory } = reciepe;
    return (
        <div className='text-left m-5 flex border border-green-500 p-2 rounded-md'>
            <img src={strMealThumb} className="w-2/5 rounded-md" alt="" />
            <div className='ml-2'>
                <h2 className='text-4xl font-bold'>{strMeal}</h2>
                <p><strong>Origin: {strArea}</strong></p>
                <p><strong>Category:
                    <Link to={`/category/${strCategory}`}>{strCategory}</Link>
                </strong></p>
                <p><strong>Ingredients: {strIngredient1},
                    {strIngredient2},
                    {strIngredient3},
                    {strIngredient4},
                    {strIngredient5},
                    {strIngredient6},
                    {strIngredient7},
                    {strIngredient8}</strong>
                </p>
                <p className='text-lg'>Instruction: {strInstructions}</p>

            </div>
        </div>
    );
};

export default ItemRecipe;