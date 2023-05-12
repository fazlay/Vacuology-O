import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import Home from '../../page/Home/Home';

const PrivateRoute = ({ path, ...props }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return 'loading';

  return (
    <Route
      {...props}
      path={'sdfsdf'}
      element={ <Home/>}
    />
  );
};

export default PrivateRoute;
