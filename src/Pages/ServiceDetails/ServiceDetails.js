import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData();
    const {title,img,details,_id,price} = service;

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className='border bg-warning p-6 '>
        <h1 className="text-5xl font-bold mb-7">Review Section</h1>

        <h3 className='flex justify-between '><span>name: Sagor sikder</span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>review : Your service is best ,awesome,gorgeous.</p>

        <h3 className='flex justify-between '><span>name: Samrat </span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>review : beautiful service ,thanks a lot.</p>

        <h3 className='flex justify-between '><span>name: Jankar mahbub</span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>review : I need your service every happy new year. </p>



        </div>
          <div>
            <h1 className="text-5xl font-bold">Service Section</h1>
            <h1 className="text-3xl font-semibold">{title}</h1>

            <img src={img} alt="" />
            
            <p className="py-6">{details}</p>
            <p>{price}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;