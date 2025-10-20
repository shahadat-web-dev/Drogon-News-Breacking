import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
  return (
    <div className='md:flex justify-center pt-5 flex-col items-center gap-4 px-4'>
     <img className='w-[471px]' src={logo} alt="" />
     <p className='text-[#706F6F] text-lg text-center'>Journalism Without Fear or Favour</p>
     <p className='font-semibold text-center text-[#706F6F]'>{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
    </div>
  );
};

export default Header;