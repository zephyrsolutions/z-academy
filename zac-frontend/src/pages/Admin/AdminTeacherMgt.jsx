import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AdminTeacherMgt = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        username: "",
        password: "",
        role: "teacher",        
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
      .post('http://localhost:5000/api/users/register-teacher', formData)
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
                name: '',
                email: '',
                username: '',
                password: '',
            });
        }, 2000); // 2000 milliseconds (2 second)
  
          // Clear form inputs on successful submission
          setFormData({
                name: '',
                email: '',
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
        <div>AdminTeacherMgt</div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Teacher Name:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Teacher name' 
                    onChange={handleChange}                   
                    name="name"
                    value={formData.name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder='Email' 
                    onChange={handleChange}                   
                    name="email"
                    value={formData.email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
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
                <label htmlFor="password">Password:</label>
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
    </>    
  )
}

export default AdminTeacherMgt