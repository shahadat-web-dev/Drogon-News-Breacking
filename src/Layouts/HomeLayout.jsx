import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatesNews from '../components/LatesNews';
import Navbar from '../components/Navbar';
import LeftAside from '../homelayout/LeftAside';
import RightAside from '../homelayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
  const {state} = useNavigation();
  return (
    <div>
      <header>
        <Header/>
        {import.meta.env.VITE_name}
        <section className='container mx-auto my-3'>
          <LatesNews/>
        </section>
        <nav className='container mx-auto my-3'>
          <Navbar/>
        </nav>
      </header>
      <main className='container mx-auto my-3 gap-5 grid md:grid-cols-12'>
        <aside className='md:col-span-3 md:sticky top-0 h-fit'>
          <LeftAside/>
        </aside>
        <section className='main md:col-span-6'>
         {state == "loading"? <Loading/> : null} <Outlet></Outlet>
        </section>
       <aside className='md:col-span-3  sticky top-0 h-fit'>
        <RightAside/>
       </aside>
      </main>
    </div>
  );
};

export default HomeLayout;