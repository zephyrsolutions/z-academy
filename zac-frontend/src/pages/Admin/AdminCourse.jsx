import React from 'react'
import Sidebar from '../../components/Sidebar'
import ContentArea from '../../components/ContentArea'
import Navigation from '../../components/Navigation'
import FloatingSidebar from '../../components/FloatingSidebar'
import CourseList from '../../components/CourseList'

const AdminDepartment = () => {
  return (
    <>
      <div className="flex">   
        <Navigation /> 
        <Sidebar />
        <CourseList />        
        <FloatingSidebar />
      </div>
    </>
  )
}

export default AdminDepartment
