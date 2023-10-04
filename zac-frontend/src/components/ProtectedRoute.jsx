import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = ({ roles }) => {
  // Get the JWT token from localStorage
  const token = localStorage.getItem('jwtToken');

  // Check if the user is authenticated (token exists)
  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  // Decode the JWT token to get the user's role
  try {
    const decodedToken = jwt_decode(token);
    const userRole = decodedToken.role;
    console.log(roles)
    console.log(`${userRole} my man!!`)

    // Check if the user has the required role(s) to access the route
    if (roles && roles.length > 0 && !roles.includes(userRole)) {
      return <Navigate to="/admin/login" />; // Redirect if not authorized
    }

    // Render the protected route if authenticated and authorized
    return <Outlet />;
  } catch (error) {
    console.error('Error decoding token:', error);
    return <Navigate to="/admin/login" />;
  }
};

export default ProtectedRoute;
