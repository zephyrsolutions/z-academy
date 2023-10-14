import React from 'react'
import Sidebar from '../../components/Sidebar'
import ContentArea from '../../components/ContentArea'
import Navigation from '../../components/Navigation'
import FloatingSidebar from '../../components/FloatingSidebar'
import DepartmentList from '../../components/DepartmentList'

const AdminDepartment = () => {
  return (
    <>
      <div className="flex">   
        <Navigation /> 
        <Sidebar />
        <DepartmentList />
        <FloatingSidebar />
      </div>
    </>
  )
}

export default AdminDepartment
