import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({ category }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = category;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/category/${strCategory}`);
    }
    return (
        <div className='border rounded-md p-3 text-left'>
            <img src={strCategoryThumb} className="w-full" alt="" />
            <h3 className='text-xl font-bold mt-2'>Category: {strCategory}</h3>
            <p><strong>Desc: </strong>{strCategoryDescription}</p>
            <button
                className='bg-cyan-600 p-2 rounded-md text-xl font-bold mt-2'
                onClick={handleNavigate}
            >
                See All Items
            </button>
        </div>
    );
};

export default Category;