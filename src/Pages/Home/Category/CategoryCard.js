import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {

    const {_id,title,img,price} = category;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='font-semibold text-orange-600'>Price : ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Check Out</button></Link>
    </div>
  </div>
</div>
    );
};

export default CategoryCard;