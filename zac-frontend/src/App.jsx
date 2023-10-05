import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { AppProvider } from '../context/App/AppProvider';
import DepartmentList from './components/DepartmentList';
import CourseList from './components/CourseList';
import SubjectsList from './components/SubjectsList';
import TeacherList from './components/TeacherList';
import StudentList from './components/StudentList';
import SyllabusList from './components/SyllabusList';
import Home from './pages/Home';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminTeacherMgt from './pages/Admin/AdminTeacherMgt';
import AdminStudentMgt from './pages/Admin/AdminStudentMgt';
import TeacherLogin from './pages/Teacher/TeacherLogin';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department" element={<DepartmentList />} />
        <Route path="/course/:departmentID" element={<CourseList />} />
        <Route path="/subject" element={<SubjectsList />} />
        <Route path="/teacher" element={<TeacherList />} />
        <Route path="/student" element={<StudentList />} />
        <Route path="/syllabus" element={<SyllabusList />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* <Route element={<ProtectedRoute />}>
          <Route path="/admin-protected" element={<AdminDashboard />} />
        </Route> */}

        <Route element={<ProtectedRoute roles={['admin']} />}>
          <Route path="/admin-protected" element={<AdminDashboard />} />
        </Route>
      
        <Route path="/admin/teacher-mgt" element={<AdminTeacherMgt />} />
        <Route path="/admin/student-mgt" element={<AdminStudentMgt />} />

        {/* Teacher routes */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher-protected" element={<TeacherDashboard />} />
        
      </Routes>
    </>
  );
}

export default App;
