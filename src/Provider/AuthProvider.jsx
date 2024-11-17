

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import  auth  from '../Firebase/auth.init.js';
export const authContext = createContext()
const AuthProvider = ({children}) => {
    const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password)
    };

    const LogInUSer = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        createUser,
        LogInUSer
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;