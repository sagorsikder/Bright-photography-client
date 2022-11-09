import {React,useContext,useState} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {

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
            phone
           

        }

        fetch('http://localhost:5000/review',{
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

        <h3 className='flex justify-between '><span>name: Sagor sikder</span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>review : Your service is best ,awesome,gorgeous.</p>

        <h3 className='flex justify-between '><span>name: Samrat </span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>review : beautiful service ,thanks a lot.</p>

        <h3 className='flex justify-between '><span>name: Jankar mahbub</span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>review : I need your service every happy new year. </p>


        {
            user?<>
        <h3 className='flex justify-between '><span>name: {user?.email}</span>  <img className='ms-5 w-7 h-7 rounded-full' src="https://th.bing.com/th/id/OIP.Gl-9JmXcclf3Xj2NmUWAYwHaNK?pid=ImgDet&rs=1" alt="" /></h3>
        
        <p className='mb-7'>{review} </p>

        <form onSubmit={handleSubmit}>
        <input className='px-3' placeholder='Enter your review' type="text" name="review" id="" />
        <br />
        <input placeholder='Enter your phone number' className='px-3' type="number" name="phone" id="" />
        <br />
        <button className='btn btn-success mt-3' type="submit">Submit</button>
        </form></>:<Link to='/login'>please login</Link>
        }


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