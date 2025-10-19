import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json")
.then(res => res.json())

const Ctagories = () => {
  const categories = use(categoryPromise);

  
  return (
    <div>
      <h2 className='font-bold'>All Categories({categories.length})</h2>
      <div className='grid grid-cols-1 mt-5 gap-3'>
        {
          categories.map(categories => <NavLink
             to={`/category/${categories.id}`} key={categories.id} className={"btn bg-base-100 border-0 hover:bg-base-300 font-semibold text-[#9F9F9F]"}>{categories.name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default Ctagories;