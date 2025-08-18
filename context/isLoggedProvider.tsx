"use client";
import {useState} from 'react';
import AuthContext from "./isLoggedContext";

const AuthProvider = function({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;