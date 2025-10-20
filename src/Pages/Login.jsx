import React, { useRef, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const emailRef = useRef(null);
  const { auth, signIn } = useContext(AuthContext); 
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        navigate(location.state ? location.state : "/");
      })
      .catch(error => {
        setError(error.code);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email to reset password!");
      })
      .catch(e => {
        toast.error(e.message);
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input ref={emailRef} name='email' type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <button type="button" onClick={handleForgotPassword} className='hover:underline cursor-pointer text-start'>
              Forgot password?
            </button>

            {error && <p className='text-red-500'>{error}</p>}

            <button type='submit' className="btn btn-neutral mt-4">Login</button>

            <p className='font-semibold text-center pt-5'>
              Don’t Have An Account ? <Link className='text-[#F9625D]' to='/auth/register'>Register</Link>
            </p>
          </fieldset>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
