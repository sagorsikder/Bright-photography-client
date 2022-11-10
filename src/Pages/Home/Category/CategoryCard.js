import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CategoryCard = ({category}) => {

    const {_id,title,img,price} = category;
    return (
        <div className="card  card-compact w-96 bg-base-100 shadow-xl">
  <figure>
  
  
  <PhotoProvider>
      <PhotoView src={img} className='w-full h-96' alt="Shoes" >
        <img className='w-full h-64' src={img} alt="Shoes" />
      </PhotoView>
    </PhotoProvider>
  
  
  
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='font-semibold text-orange-600'>Price : ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default CategoryCard;