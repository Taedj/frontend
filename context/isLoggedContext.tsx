'use client';
import {createContext} from 'react';

type AuthContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (boolean)=>void;
  };
  
const AuthContext = createContext({} as AuthContextType);
export default AuthContext;