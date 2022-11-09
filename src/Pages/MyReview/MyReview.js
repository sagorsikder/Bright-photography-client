import {React,useContext,useEffect,useState} from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReview = () => {
    const {user,logOut} = useContext(AuthContext);
    const [review,setReview]=useState({})

    console.log(review)
    useEffect(()=>{
     
        fetch(`http://localhost:5000/myreview?email=${user.email}`)
        .then(data => setReview(data))
        .catch(err=>console.log(err))
    },[user.email,logOut])
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-center text-5xl font-semibold bg-primary p-3 text-warning'> My reviews</h1>
            {
                user?.email
            }
        </div>
    );
};

export default MyReview;