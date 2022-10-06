import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ meal }) => {
    const { strMeal, strMealThumb } = meal;
    return (
        <div className='text-left'>
            <img src={strMealThumb} className="w-full rounded-md" alt="" />
            <h2 className='text-xl font-bold'>{strMeal}</h2>
            <Link to={`/item/${strMeal}`}>
                <button className='bg-green-400 p-2 rounded-md text-xl font-semibold'>Show Receipe</button>
            </Link>
        </div>
    );
};

export default Item;