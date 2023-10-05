import React from 'react'
import { useAppContext } from '../context/App/AppProvider';

const TeacherList = () => {
    const { teachers } = useAppContext();
    console.log(teachers)

  return (
    <div>
      <h2>Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
            <li key={teacher._id}>{teacher.teacherName}</li>   
        ))}
      </ul>
    </div>
  )
}

export default TeacherList
