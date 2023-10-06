import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '../../context/Auth/AuthProvider';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'admin',
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const { login } = useAuthContext(); // Get the login function from the auth context
  
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/users/login-admin', formData)
      .then((response) => {
        if (response && response.data) {
          // Call the login function to set user data and token
          
          login(response.data.token);

          axios
            .get('http://localhost:5000/api/users/admin-protected', {
              headers: {
                Authorization: response.data.token, // Include the token from the auth context
              },
            })
            .then((res) => {
              // Check if the response indicates success (e.g., res.status === 200)
              if (res.status === 200) {
                // Navigate to the server-side route if successful
                navigate('/admin-protected');
                toast('Admin logged in successfully!', {
                  position: toast.POSITION.TOP_CENTER,
                });
              } else {
                // Handle other cases or errors as needed
                console.error('Server response indicates an error:', res);
              }
            })
            .catch((error) => {
              // Handle any errors from the GET request
              console.error('Error fetching data:', error);
            });

          // Clear form inputs on successful submission
          setFormData({
            username: '',
            password: '',
          });
        } else {
          // Handle unexpected response format
          console.error(`Unexpected response format: ${response}`);
          toast.error('An unexpected error occurred.', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.data && error.response.data.message) {
          console.error(`Error: ${error.response.data.message}`);
          // Display the error message from the server
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          // Handle unexpected error format
          console.error(`Unexpected error format: ${error}`);
          toast.error('An unexpected error occurred.', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };
      
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postTitle">Username:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postTitle">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AdminLogin;
