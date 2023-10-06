import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'; // Import Axios here for API requests
import jwt_decode from 'jwt-decode'; // Import jwt_decode for decoding JWT tokens
import AuthContext from './AuthContext'; // Import your AuthContext

export const AuthProvider = ({ children }) => {
  // Initialize your authentication-related state variables
  const [user, setUser] = useState(null); // Store user information
  const [isLoading, setIsLoading] = useState(true); // To track whether authentication data is loading

  // Function to set the user data upon successful login
  const login = (token) => {
    const decodedToken = jwt_decode(token);
    setUser(decodedToken);
    localStorage.setItem('jwtToken', token); // Store the token in local storage
  };

  // Function to log the user out
  const logout = () => {
    setUser(null);
    localStorage.removeItem('jwtToken'); // Remove the token from local storage
  };

  useEffect(() => {
    // Check for an existing token in local storage when the component mounts
    const token = localStorage.getItem('jwtToken');

    if (token) {
      const decodedToken = jwt_decode(token);

      // Check if the token is expired
      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
      } else {
        setUser(decodedToken);
      }
    }

    setIsLoading(false); // Authentication data loading is complete
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
