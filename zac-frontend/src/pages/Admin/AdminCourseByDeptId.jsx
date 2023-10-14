import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import { useAppContext } from '../../context/App/AppProvider'
import InfoCard from '../../components/InfoCard'
import AddButton from '../../components/AddButton'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const AdminCourseByDeptId = () => {

    const { courses } = useAppContext()

    const [department, setDepartments] = useState([]);

    const { departmentID } = useParams()

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
      <div className="flex">
        <Sidebar />

        <div className="pt-16 pl-6 md:pl-8">
          <h1 className="text-2xl font-semibold">Welcome Admin</h1>
          <h2 className="text-xl font-medium">Courses</h2>

          <div className="pt-8">
            <AddButton />
          </div>

          <section className="lg:flex flex-wrap">
            { courseByDept }
          </section>

        </div>
      </div>
    </>
  )
}

export default AdminCourseByDeptId
