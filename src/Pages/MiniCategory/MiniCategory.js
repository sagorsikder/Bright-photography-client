import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCategoryCard from './MiniCategoryCard';

const Category = () => {
    const [categories,setCategory] = useState([])

    useEffect(()=>{

        fetch('https://helping-network-server.vercel.app/minicategory')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div className='w-5/6 mx-auto'>
            <div className='text-center'>
           
            <h2 className='font-bold text-5xl text-black my-4'>Our Service Category</h2>
            <p className='w-1/2 mx-auto my-5'>The reason why photography is important is that it freezes memories. It captures a moment in time that you all be able to remember and cherish years from now.So if you can need it,chose category.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 py-3 my-5 gap-6 lg:grid-cols-3'>

                {
                    categories.map(category =><MiniCategoryCard key={category._id} category={category}></MiniCategoryCard>)
                }
            </div>

           <Link to='/services'> <button className='btn btn-primary '>See All</button></Link>
        </div>
    );
};

export default Category;