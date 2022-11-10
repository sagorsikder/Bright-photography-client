import {React,useContext,useState} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const ServiceDetails = () => {

    useTitle('servicedetails')
    const{user}=useContext(AuthContext)
    const [review,setReview] = useState('')

    const service = useLoaderData();
    const {title,img,details,_id,price} = service;

    const handleSubmit =(event)=>{

        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        const phone = form.phone.value;
        setReview(review)

        const userReview = {

            
            email:user?.email,
            serviceId : _id,
            serviceName : title,
            review,
            phone,
            image:img
           

        }

        fetch('https://helping-network-server.vercel.app/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userReview)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            if(result.acknowledged){
                alert('Review submit successfully')
                form.reset();
                
            }
        })
        .catch(err=>console.error(err))
        console.log(userReview)
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className='border bg-warning p-6 '>
        <h1 className="text-5xl font-bold mb-7">Review Section</h1>

        <div className='border p-3'>
        <h3 className='flex justify-between '><span>Name: Sagor sikder</span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>Review : Your service is best ,awesome,gorgeous.</p>
        </div>

       <div  className='border p-3'>
       <h3 className='flex justify-between '><span>Name: Samrat </span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>Review : beautiful service ,thanks a lot.</p>
       </div>

       <div  className='border p-3'>
       <h3 className='flex justify-between '><span>Name: Jankar mahbub</span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>Review : I need your service every happy new year. </p>
       </div>


        {
            user?<>
        <div className='border p-3'>
        <h3 className='flex justify-between '><span>name: {user?.email}</span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>{review} </p>
        </div>
            
        <form onSubmit={handleSubmit}>
        <input className='px-3 my-3' placeholder='Enter your review' type="text" name="review" id="" />
        <br />
        <input placeholder='Enter your phone number' className='px-3' type="number" name="phone" id="" />
        <br />
        <button className='btn btn-success mt-3' type="submit">Submit</button>
        </form></>:<Link to='/login'>please login</Link>
        }


        </div>
          <div>
            <h1 className="text-5xl text-primary my-5 font-bold">Service Details</h1>
            <h1 className="text-3xl my-2 font-semibold">{title}</h1>

            <img src={img} alt="" />
            
            <p className="py-6 text-primary">Details: {details}</p>
            <p className='text-primary'>Price : {price}</p>
          
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;