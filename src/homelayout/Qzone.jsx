import React from 'react';
import swimming from '../assets/swimming.png';
import classes from '../assets/class.png';
import playGround from '../assets/playground.png'
import bgPng from '../assets/bg.png';

const Qzone = () => {
  return (
    <div className='bg-base-300 p-5'>
      <h2 className='font-bold mb-5'>Q-Zone</h2>
      <div className='space-y-5 flex flex-col'>
        <img src={swimming} alt="" />
        <img src={classes} alt="" />
        <img src={playGround} alt="" />
        <img src={bgPng} alt="" />

      </div>
    </div>
  );
};

export default Qzone;