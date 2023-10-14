// DepartmentList.js
import React from 'react';
import { useAppContext } from '../context/App/AppProvider';
import { Link, useParams } from 'react-router-dom'

function CourseList() {
  const { courses } = useAppContext();

  const { departmentID } = useParams()

  return (

    <div className="pt-16 pl-10">
        <h1 className="text-2xl font-semibold">Welcome Admin</h1>
        <h2>Courses</h2>  
        <div className="mt-6 ml-2">
          {courses.map((course) => (
            <div>
              <Link key={course._id}>{course.courseName}</Link>
            </div>        
          ))}  
        </div>
    </div>
    
  );
}

export default CourseList;
