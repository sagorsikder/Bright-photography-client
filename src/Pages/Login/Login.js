import {React,useContext} from 'react';

import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'

const Login = () => {

  const{signIn} = useContext(AuthContext)
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  const handleLogin=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password)

    signIn(email,password)
    .then(result=>{
      const user = result.user;

      const currentUser = {
        email:user.email
      }

      // jwt token acces
      fetch('http://localhost:5000/jwt',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)

        
        localStorage.setItem('genious-token',data.token)
      })


      navigate(from,{replace:true})
      form.reset()
    })
    .then(err=>console.log(err))

  }

    return (
        <div className="hero">
  <div className="hero-content w-full flex-col my-5 lg:flex-row">
    <div className="text-center my-5 lg:text-left">
      
      <img  src={image}  className='h-3/5 w-full p-3 '  alt="" />
    </div>
    <div className="card flex-shrink-0 w-full my-5 py-5 max-w-sm shadow-2xl ">
      <div className="card-body">

      <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
       
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
           
          </label>
          <input className='btn btn-warning my-3' type="submit" value="Sign In" />
       
        </form>


        
       
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;