import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext)
  const [nameError, setNameError] = useState('');

  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const from = e.target;
    const name = from.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
    }
    else {
      setNameError('');
    }
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then(result => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({...user, displayName: name, photoURL: photo});
            navigate('/');
          })
          .catch((error) => {
           console.log(error);
           setUser(user)
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode)
      });

  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register your account</h2>

        {/* From */}
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">

            {/* Name*/}
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Name" required />

            {nameError && <p className='text-red-500'>{nameError}</p>}

            {/* PhotoURL*/}
            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Photo URL" required />


            {/* Email */}
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            {/* Password */}
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            {/* Register button */}
            <button type='submit' className="btn btn-neutral mt-4">Register</button>

            <p className='font-semibold text-center pt-5'>Allredy Have An Account ? <Link className='text-[#F9625D]' to='/auth/login'>Login</Link></p>

          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;