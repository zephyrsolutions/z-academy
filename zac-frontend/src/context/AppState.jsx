// AppState.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios'; // Import Axios here

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]); // Initialize departments state
  const [courses, setCourses] = useState([]); // Initialize courses state

  useEffect(() => {
    // Fetch departments data when the component mounts
    async function fetchDepartments() {
      try {
        const response = await axios.get('http://localhost:5000/admin/department');
        setDepartments(response.data);
      } catch (error) {
        console.error(error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchDepartments();
  }, []); // Empty dependency array ensures this runs once

  useEffect(() => {
    // Fetch departments data when the component mounts
    async function fetchCourses() {
      try {
        const response = await axios.get('http://localhost:5000/admin/course');
        setCourses(response.data);
      } catch (error) {
        console.error(error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchCourses();
  }, []); // Empty dependency array ensures this runs once

  return (
    <AppContext.Provider value={{ departments, courses }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
