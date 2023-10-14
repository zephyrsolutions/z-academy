import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import InfoCard from '../../components/InfoCard'
import { useAppContext } from '../../context/App/AppProvider'
import AddButton from '../../components/AddButton'


const AdminDepartment = () => {

  const { departments } = useAppContext();
  
  const departmentData = departments.map(department => {
    return (
      <InfoCard 
        departmentId = {department._id} 
        departmentName = {department.departmentName}
      />
    )
  })
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="pt-16 pl-6 md:pl-8">
          <h1 className="text-2xl font-semibold">Welcome Admin</h1>
          <h2 className="text-xl font-medium">Departments</h2>

          <div className="pt-8">
            <AddButton />
          </div>

          <section className="lg:flex flex-wrap">
            {departmentData}
          </section>

        </div>
      </div>
    </>
  )
}

export default AdminDepartment
