import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { useAppContext } from '../../context/App/AppProvider'
import InfoCard from '../../components/InfoCard'
import AddButton from '../../components/AddButton'

const AdminDepartment = () => {
  const { courses } = useAppContext()
  
  const courseData = courses.map(course => {
    return(
      <InfoCard 
        courseId = {course._id}
        courseName = {course.courseName} 
      />
    )
  })
  return (
    <>
      <div className="flex">
          <Sidebar />
        <div className="pt-16 pl-6 md:pl-8">
          <h1 className="text-2xl font-semibold">Welcome Admin</h1>
          <h2 className="text-xl font-medium">Courses</h2>
          <div className="pt-8">
            <AddButton />
          </div>
          <section className="lg:flex flex-wrap">
            {courseData}
          </section>
        </div>
        
      </div>
    </>
  )
}

export default AdminDepartment
