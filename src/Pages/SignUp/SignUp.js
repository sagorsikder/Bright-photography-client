import  {React, useContext } from 'react';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const{createUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUpForm = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
      navigate(from,{replace:true})
      form.reset()
        })
        .catch(err=>console.error(err))



       
    }

    return (
        <div className="hero">
  <div className="hero-content w-full flex-col my-5 lg:flex-row">
    <div className="text-center my-5 lg:text-left">
      
      <img className='h-3/5 w-full p-3 ' src={image} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full my-5 py-5 max-w-sm shadow-2xl ">
      <div className="card-body">

      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
        <form onSubmit={handleSignUpForm}  className="form-control">
        <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
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
          <input className='btn btn-warning my-3' type="submit" value="Sign Up" />
       
        </form>

      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;