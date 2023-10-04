import React from 'react';
import axios from 'axios'; // You might need to install axios if not already done
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Remove JWT token from local storage
      localStorage.removeItem('jwtToken');

      // Redirect to the login page
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
