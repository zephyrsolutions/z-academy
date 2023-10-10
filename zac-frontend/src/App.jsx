import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
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
import StudentLogin from './pages/Student/StudentLogin';
import StudentDashboard from './pages/Student/StudentDashboard';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDepartment from './pages/Admin/AdminDepartment';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/course/:departmentID" element={<CourseList />} />
        <Route path="/subject" element={<SubjectsList />} />
        <Route path="/teacher" element={<TeacherList />} />
        <Route path="/student" element={<StudentList />} />
        <Route path="/syllabus" element={<SyllabusList />} />

        {/* Admin routes */}

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute roles={['admin']} />}>
          <Route path="/admin-protected" element={<AdminDashboard />} />
          <Route path="/admin/department" element={<AdminDepartment />} />
          <Route path="/admin/teacher-mgt" element={<AdminTeacherMgt />} />
          <Route path="/admin/student-mgt" element={<AdminStudentMgt />} />
        </Route>

        {/* Teacher routes */}

        <Route path="/teacher/login" element={<TeacherLogin />} />

        <Route element={<ProtectedRoute roles={['teacher']} />}>
          
          <Route path="/teacher-protected" element={<TeacherDashboard />} />
        </Route>

        {/* Student routes */}

        <Route path="/student/login" element={<StudentLogin />} />

        <Route element={<ProtectedRoute roles={['student']} />}>          
          <Route path="/student-protected" element={<StudentDashboard />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
