import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Restuarant = () => {
    const categories = useLoaderData();
    const { categories: categoriesList } = categories;

    return (
        <div className='bg-slate-400'>
            <h2 className='text-3xl font-bold'>
                We have total {categoriesList.length} Categories in our Restaurant
            </h2>
            <div className='grid grid-cols-3 gap-3 m-3'>
                {
                    categoriesList.map(category => <Category
                        key={category.idCategory}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Restuarant;