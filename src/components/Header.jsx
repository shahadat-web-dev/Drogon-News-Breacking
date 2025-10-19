import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
  return (
    <div className='flex justify-center pt-5 flex-col items-center gap-4'>
     <img className='w-[471px]' src={logo} alt="" />
     <p className='text-[#706F6F] text-lg'>Journalism Without Fear or Favour</p>
     <p className='font-semibold text-[#706F6F]'>{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
    </div>
  );
};

export default Header;