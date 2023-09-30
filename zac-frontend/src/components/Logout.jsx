import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear the JWT token from client-side storage (localStorage)
    localStorage.removeItem('jwtToken')

    // Redirect to the login page or any other appropriate page
    navigate('/admin/login')
  };

  return (
    <div>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
