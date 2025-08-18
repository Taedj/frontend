import {useContext} from 'react';
import AuthContext from '../context/isLoggedContext';

const useIsLogged = () => {
    const ctx = useContext(AuthContext);
    return ctx;
  }
export default useIsLogged;