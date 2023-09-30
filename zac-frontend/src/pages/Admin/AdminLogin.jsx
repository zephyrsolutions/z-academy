import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AdminLogin = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "admin",        
      });

    const handleChange = (event) => {
    setFormData((prevFormData) => {
        return {
        ...prevFormData,
        [event.target.name]: event.target.value,
        };
    });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios
      .post('http://localhost:5000/api/users/login-admin', formData)
      .then((response) => {
        if (response && response.data) {

          // Store the token in localStorage
          localStorage.setItem('jwtToken', response.data.token);

          toast('Admin logged in successfully!', {
            position: toast.POSITION.TOP_CENTER,
          });  
          
          // Delay the redirection by 1 second (1000 milliseconds)
          setTimeout(() => {
            // Redirect to the dashboard after successful login
            navigate('/admin/dashboard');

            // Clear form inputs on successful submission
            setFormData({
              username: '',
              password: '',
            });
        }, 1000); // 2000 milliseconds (2 second)
  
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
          console.error(`ErrorSAGA : ${error.response.data.message}`);
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
                    placeholder='Username' 
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
                    placeholder='Password' 
                    onChange={handleChange}                   
                    name="password"
                    value={formData.password}
                />
            </div>
            <button className="btn btn-primary">
                Submit
            </button>
        </form>
        <ToastContainer />
    </>
  )
}

export default AdminLogin