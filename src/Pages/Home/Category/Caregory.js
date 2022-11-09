import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories,setCategory] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div>
            <div className='text-center'>
            <p className='text-xl font-bold text-orange-600'>services</p>
            <h2 className='font-bold text-5xl text-black my-4'>Our Service Category</h2>
            <p className='w-1/2 mx-auto my-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 py-3 my-5 gap-6 lg:grid-cols-3'>

                {
                    categories.map(category =><CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>

           <Link to='/services'> <button className='btn btn-primary '>See All</button></Link>
        </div>
    );
};

export default Category;