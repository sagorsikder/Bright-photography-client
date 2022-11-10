import {React,useContext}from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddService = () => {
    const{user} = useContext(AuthContext)

    const handleForm=(event)=>{

        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value
        const serviceImage = form.serviceImage.value


        console.log(serviceName,serviceImage)
    }
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-center font-semibold text-4xl mb-5'>
                Add Service
            </h1>

            <h3>Name: </h3>
            <h3 className='mb-8'>Email : {user?.email}</h3>

            <form onSubmit={handleForm}>
                <input type="text" placeholder='service name ' name="serviceName" id="" />
                <br />
                <input type="text" placeholder='Service image' name='serviceImage' />
                <br />
                <button className='btn btn-primary' type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;