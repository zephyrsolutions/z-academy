import React from 'react'
import { useAppContext } from '../context/AppProvider'

const StudentList = () => {
    const {students} = useAppContext()
  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
            <li key={student._id}>{student.studentName}</li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList
