import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../components/Logout'
import Sidebar from '../../components/Sidebar'
import ContentArea from '../../components/ContentArea'
import Navigation from '../../components/Navigation'
import FloatingSidebar from '../../components/FloatingSidebar'

const AdminDashboard = () => {
  return (
    <>
      <div className="flex">   
        <Navigation /> 
        <Sidebar />
        <ContentArea />  
        <FloatingSidebar />
      </div>
    </>    
  )
}

export default AdminDashboard