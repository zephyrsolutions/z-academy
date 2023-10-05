// AppState.js
import AppContext from './AppContext';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'; // Import Axios here

export const AppProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]); // Initialize departments state
  const [courses, setCourses] = useState([]); // Initialize courses state
  const [subjects, setSubjects] = useState([]); // Initialize subjects state
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  const [syllabus, setSyllabus] = useState([])

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

  useEffect(() => {
    // Fetch departments data when the component mounts
    async function fetchSubjects() {
      try {
        const response = await axios.get('http://localhost:5000/admin/subject');
        setSubjects(response.data);
      } catch (error) {
        console.error(error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchSubjects();
  }, []); // Empty dependency array ensures this runs once

  useEffect(() => {
    // Fetch departments data when the component mounts
    async function fetchTeachers() {
      try {
        const response = await axios.get('http://localhost:5000/admin/teacher');
        setTeachers(response.data);
      } catch (error) {
        console.error(error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchTeachers();
  }, []); // Empty dependency array ensures this runs once

  useEffect(() => {
    // Fetch departments data when the component mounts
    async function fetchStudents() {
      try {
        const response = await axios.get('http://localhost:5000/admin/student');
        setStudents(response.data);
      } catch (error) {
        console.error(error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchStudents();
  }, []); // Empty dependency array ensures this runs once

  useEffect(() => {
    // Fetch departments data when the component mounts
    async function fetchSyllabus() {
      try {
        const response = await axios.get('http://localhost:5000/admin/syllabus');
        setSyllabus(response.data);
      } catch (error) {
        console.error(error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchSyllabus();
  }, []); // Empty dependency array ensures this runs once

  return (
    <AppContext.Provider value={{ departments, courses, subjects, teachers, students, syllabus }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};


