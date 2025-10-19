import React from 'react';
import { AuthContext } from './AuthProvider';
import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading} = use(AuthContext)
  // console.log(user);
  const location = useLocation();
  // console.log(location);
  

  if(loading){
    return <Loading/>

  }
  
  if(user && user?.email){
    return children;
  }
  return <Navigate state={location.pathname} to='/auth/login'></Navigate>;
  
  
};

export default PrivateRoute;