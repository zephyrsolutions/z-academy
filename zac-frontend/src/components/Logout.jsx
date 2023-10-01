import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the JWT token from client-side storage (localStorage)
    localStorage.removeItem('jwtToken');

    toast('Logged out successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });  
    
    // Delay the redirection by 1 second (1000 milliseconds)
    setTimeout(() => {
      // Redirect to the dashboard after successful login
      navigate('/');
  }, 2000); // 2000 milliseconds (2 seconds)
  };

  return (
    <div>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer />
    </div>
  );
};

export default Logout;
