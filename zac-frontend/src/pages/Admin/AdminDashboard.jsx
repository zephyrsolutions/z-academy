import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../components/Logout'

const AdminDashboard = () => {
  return (
    <>
      <div>Welcome to AdminDashboard</div>
      <Link to='/admin/teacher-mgt'>Teacher Registration</Link>
      <Link to='/admin/student-mgt'>Student Registration</Link>
      <Logout />
    </>    
  )
}

export default AdminDashboard