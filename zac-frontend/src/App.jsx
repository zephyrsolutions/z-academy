import { Routes, Route } from 'react-router-dom'
import './App.css'
import { AppProvider } from './context/AppProvider';
import DepartmentList from './components/DepartmentList';
import CourseList from './components/CourseList';
import SubjectsList from './components/SubjectsList';
import TeacherList from './components/TeacherList';
import StudentList from './components/StudentList';
import SyllabusList from './components/SyllabusList';
import Home from './pages/Home';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';

function App() {  
  return (

    <AppProvider>

      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/department" element={<DepartmentList />} />
        <Route path="/course/:departmentID" element={<CourseList />} />
        <Route path="/subject" element={<SubjectsList />} />
        <Route path="/teacher" element={<TeacherList />} />
        <Route path="/student" element={<StudentList />} />
        <Route path="/syllabus" element={<SyllabusList />} />
        {/* Add more routes as needed */}

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
      </Routes>
      
    </AppProvider>
  )
}

export default App
