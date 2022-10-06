import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const items = useLoaderData();
    const { meals } = items
    return (
        <div>
            <h2 className='text-6xl font-bold m-5'>We have total {meals.length} items in this category</h2>
            <div className='grid grid-cols-3 gap-3 bg-slate-500 p-3'>
                {
                    meals.map(meal => <Item meal={meal}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;