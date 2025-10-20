import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  const emailRef = useRef(null)
  const { auth } = AuthContext;
  const [error, setError] = useState('')
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(({ email, password }));
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`)

      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage)
        setError(errorCode)
      })
  };


  const hanleForgotPassword = (e) => {
    e.preventDefault();
    const email = (emailRef.current.value);
    sendPasswordResetEmail(auth, email)
   .then((res) => {
    console.log(res);
     toast.success("check you email to reset password")
   }).catch(e=> {
    toast.error(e.message)
   });
  }
  

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label
              className="label">Email</label>
            <input ref={emailRef} name='email' type="email" className="input" placeholder="Email" required />

            {/* Password */}
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <button onClick={hanleForgotPassword} className='hover:underline cursor-pointer text-start'>Forgot password?</button>

            {error && <p className='text-red-500'>{error}</p>}

            <button type='submit' className="btn btn-neutral mt-4">Login</button>

            <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link className='text-[#F9625D]' to='/auth/register'>Register</Link></p>
          </fieldset>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;