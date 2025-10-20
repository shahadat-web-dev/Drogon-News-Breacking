
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const handleLogOut = () => {
    // console.log("user to find to logout");
    logOut().then(()=> {
      alert("you Logged out successfully");
    })
    .catch((error)=> {
      console.log(error);
      
    })
  }
  return (
    <div className='md:flex items-center md:justify-between justify-center'>
      <div className=''>{user && user.email}</div>
      <div className='nav  flex gap-5 justify-center  text-[#706F6F] text-lg'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='login-btn flex gap-5'>
        <img className='w-12 rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="" />
        {
          user ? <button onClick={handleLogOut} className='btn px-10 text-white bg-[#403F3F]'>Logout</button> : <Link to='/auth/login' className='btn px-10 text-white bg-[#403F3F]'>Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;