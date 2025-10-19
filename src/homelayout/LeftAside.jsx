import React, { Suspense } from 'react';
import Ctagories from '../components/Ctagories';

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<div>
        <span className="loading loading-bars loading-xl"></span>
      </div>}>
        <Ctagories />
      </Suspense>
    </div>
  );
};

export default LeftAside;