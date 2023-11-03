import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import InfoCard from '../../components/InfoCard'
import { useAppContext } from '../../context/App/AppProvider'
import AddButton from '../../components/AddButton'
import { FcPlus } from "react-icons/fc";
import Modal from '../../components/Modal'


const AdminDepartment = () => {

  const [showModal, setShowModal] = useState(false)
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
      <div class="flex">
          <aside class="h-screen sticky top-0">
            <Sidebar />
          </aside>

          <main className="py-16 px-2">
            <h1 className="text-2xl font-semibold">Welcome Admin</h1>
            <h2 className="text-xl font-medium">Departments</h2>

            <div className="pt-8">
              <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center" onClick={() => setShowModal(true)}>
                <FcPlus className="fill-current w-8 h-8 mr-2" />
                <span>Add Department</span>
              </button>
            </div>

            <section className="lg:flex flex-wrap">
              {departmentData}
            </section>
          </main>
      </div>

      {/* Add Department Form */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Add Department Form
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label 
              htmlFor="departmentName"
              className="block mb-2 text-sm font-medium text-gray-900">
                Department Name
              </label>
              <input 
              type="text" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Department Name"
              required
              />
            </div>

            <div>
              <label 
              htmlFor="departmentLocation"
              className="block mb-2 text-sm font-medium text-gray-900">
                Department Location
              </label>
              <input 
              type="text" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Department Location"
              required
              />
            </div>

            <div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Department</button>
            </div>
          </form>
        </div>
      </Modal>


    </>
  )
}

export default AdminDepartment
