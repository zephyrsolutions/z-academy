import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { useAppContext } from '../../context/App/AppProvider'
import InfoCard from '../../components/InfoCard'
import AddButton from '../../components/AddButton'
import { FcPlus } from "react-icons/fc";
import Modal from '../../components/Modal'

const AdminDepartment = () => {
  const { courses } = useAppContext()
  const [showModal, setShowModal] = useState(false)
  
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
      <div class="flex">
          <aside class="h-screen sticky top-0">
            <Sidebar />
          </aside>

          <main className="py-16 px-2">
            <h1 className="text-2xl font-semibold">Welcome Admin</h1>
            <h2 className="text-xl font-medium">Courses</h2>
            <div className="pt-8">
              <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center" onClick={() => setShowModal(true)}>
                <FcPlus className="fill-current w-8 h-8 mr-2" />
                <span>Add Course</span>
              </button>
            </div>
            <section className="lg:flex flex-wrap">
              {courseData}
            </section>
          </main>
      </div>


      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Add Course Form 
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label 
              htmlFor="courseName"
              className="block mb-2 text-sm font-medium text-gray-900">
                Course Name
              </label>
              <input 
              type="text" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Course Name"
              required
              />
            </div>
          </form>
        </div>
      </Modal>



    </>
  )
}

export default AdminDepartment
