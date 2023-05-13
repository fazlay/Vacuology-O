import React from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import useAuth from '../hook/useAuth';


const PrivateRoute= () => {
  const { user, isLoading }= useAuth();

  if (isLoading) return 'loading';

  return user?.email ?  <Outlet/> : <Navigate to="/login" />;
}
export default PrivateRoute;
