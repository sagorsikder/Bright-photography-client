import {React,useContext}from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    const{user} = useContext(AuthContext)
    useTitle('addservice')

    const handleForm=(event)=>{

        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value
        const serviceImage = form.serviceImage.value
        const price = form.price.value;
        const details = form.details.value;

        alert('Service added successfully.')

        console.log(serviceName,price,details,serviceImage)
    }
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-center text-5xl font-semibold bg-primary p-3 text-warning'>
                Add Service
            </h1>

            <div className='my-5 p-3 bg-slate-400 rounded'>

            <h3>Name: </h3>
            <h3 className='mb-8'>Email : {user?.email}</h3>
            </div>
           

            <form className='p-4 w-3/4 mx-auto' onSubmit={handleForm}>
                <label htmlFor="">Service Name</label>
                <br />
                <input className='py-2 px-3 rounded-lg mb-3' type="text" placeholder='service name ' name="serviceName" id="" />
                <br />
                <label className='mt-3' htmlFor="">Price</label>
                <br />
                <input className='py-2 px-3 rounded-lg mb-3'  type="text" placeholder='price ' name="price" id="" />
                <br />
                <label className='mt-3'  htmlFor="">Details</label>
                <br />
                <input className='py-10 px-3 rounded-lg mb-3'  type="text" placeholder='description ' name="details" id="" />
                <br />
                <label  className='mt-3' htmlFor="">Service Image</label>
                <br />
                <input className='py-2 px-3 rounded-lg mb-3'  type="text" placeholder='Service image' name='serviceImage' />
                <br />
                <button className='btn btn-primary' type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;