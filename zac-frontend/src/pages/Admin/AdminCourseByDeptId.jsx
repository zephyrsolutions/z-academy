import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import { useAppContext } from '../../context/App/AppProvider'
import InfoCard from '../../components/InfoCard'
import AddButton from '../../components/AddButton'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FcPlus } from "react-icons/fc";
import Modal from '../../components/Modal'


const AdminCourseByDeptId = () => {

    const { courses } = useAppContext()

    const [department, setDepartments] = useState([]);

    const { departmentID } = useParams()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        // Fetch departments data when the component mounts
        async function fetchDepartments() {
            try {
                const response = await axios.get(`http://localhost:5000/admin/departmentMain/${departmentID}`);
                setDepartments(response.data);
            } catch (error) {
                console.error(error);
                // Handle error appropriately (e.g., display an error message)
            }
        }

        fetchDepartments();
    }, [departmentID]); // Empty dependency array ensures this runs once


    const courseByDept = department.map(dept => {
        return(
            <InfoCard 
                courseName = {dept.courseName}
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
              { courseByDept }
            </section>
          </main>
      </div>


      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Sign in to our platform
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label 
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900">
                Your Email
              </label>
              <input 
              type="email" 
              name="email" 
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="abc@abc.com"
              required
              />
            </div>
          </form>
        </div>
      </Modal>


    </>
  )
}

export default AdminCourseByDeptId
