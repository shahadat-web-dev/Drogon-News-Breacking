
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='bg-base-300 min-h-screen'>
     <header className='container mx-auto py-4'>
      <Navbar></Navbar>
     </header>
     <main className='container mx-auto py-5'>
       <Outlet/>
     </main>
    </div>
  );
};

export default AuthLayout;