import { React, useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories,setCategory] = useState([])

    useTitle('services')
    useEffect(()=>{

        fetch('https://helping-network-server.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div className='w-5/6 mx-auto'>
            <div className='text-center'>
          
            <h2 className='font-bold text-5xl text-black my-4'>Our Service Category</h2>
            
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 py-3 my-5 gap-6 lg:grid-cols-3'>

                {
                    categories.map(category =><CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>

          
        </div>
    );
};

export default Category;