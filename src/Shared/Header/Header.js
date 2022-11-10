
import {React,useContext} from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {

  const{user,logOut}=useContext(AuthContext)
  
    return (
        <div className="navbar px-4 bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              
              <li><Link to='/blog'>Blog</Link></li>
           {
            user?<>
               <li><Link to='/myreviews'>My reviews</Link></li>
             
            </>:''
           }
            <li><Link to='/addservice'>Add service</Link></li>
            </ul>
          </div>
          <Link href='/' className="btn btn-ghost normal-case text-xl">Bright Photography</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>
              
              <li><Link to='/blog'>Blog</Link></li>

                {
            user?<>
               <li><Link to='/myreview'>My reviews</Link></li>
             
            </>:''
           }
            <li><Link to='/addservice'>Add service</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
         
        { 
           user?<button onClick={logOut} className='btn btn-dark'>Log out</button>:<>
          <Link to='/register'><button className='btn btn-primary'>Register</button></Link>
          <Link to='/login'><button className='btn btn-warning'>Login</button></Link>
        </>
          }
          <div className="w-10 h-3/4">
          {
          
            user?<img alt='user' className='mx-3 h-3/4 rounded-3xl' src={user.photoURL?user.photoURL:'https://th.bing.com/th/id/R.98a25018b42419dd4188267e3345023f?rik=duLgA7T8SvBH7Q&riu=http%3a%2f%2fwww.brightstudio.com.sg%2fimages%2fPhotography%2fPassport%2fPicture%2fpassport15.jpg&ehk=nqMBFaMrS%2f8y3SHU6h%2bPwdo1MjMeshvFprGtriIwxb4%3d&risl=&pid=ImgRaw&r=0'} />:''
          }
          <p className='mx-3 text-orange-600'>{user?.displayName}</p>
        </div>
        </div>
      </div>
    );
};

export default Header;