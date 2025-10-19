import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebasa/Firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(loading, user);
  
  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


//  SignIn
  const signIn = (email, password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Update User
  const updateUser = (updatedDate) => {
    return updateProfile(auth.currentUser, updatedDate)
    
  }

  // Logout
  const logOut = () => {
    return signOut(auth);
  }


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser);
      setLoading(false)
  return () => {
   unsubscribe()
  }
    },[])
  })

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    
    
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
