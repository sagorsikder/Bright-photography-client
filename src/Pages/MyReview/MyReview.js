import {React,useContext,useEffect,useState} from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';

const MyReview = () => {
    const {user,logOut} = useContext(AuthContext);
    const [review,setReview]=useState([])

    console.log(review)
    useEffect(()=>{
     
        fetch(`http://localhost:5000/myreview?email=${user.email}`)
        .then(res =>res.json())
        .then(data => setReview(data))
        .catch(err=>console.log(err))
    },[user.email,logOut])
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-center text-5xl font-semibold bg-primary p-3 text-warning'> My reviews</h1>
            
               <h1 className='mt-4'>{ user?.email}</h1>
            
            <div>
             <div className='my-5 bg-slate-400 rounded'>
               
             <img src={user.photoURL?user.photoURL:''} alt="" />
                <h3>name:{user?.displayName} </h3>
                <h3>email: {user?.email}</h3>
                <h3>Total Review: {review.length}</h3>
             </div>
               


                <table className="table w-full">
  
  <thead>
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <th>Name</th>
      <th>Category</th>
      <th>Review</th>
      <th></th>
    </tr>
  </thead>
  <tbody>


{
  review.map(r=><ReviewTable key={r._id} review={r}></ReviewTable>)
}



  </tbody>

  
</table>



            </div>
        </div>
    );
};

export default MyReview;