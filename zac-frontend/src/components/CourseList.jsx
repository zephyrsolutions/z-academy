// DepartmentList.js
import React from 'react';
import { useAppContext } from '../context/AppProvider';
import { Link, useParams } from 'react-router-dom'

function CourseList() {
  const { courses } = useAppContext();

  const { departmentID } = useParams()

  return (
    <div>
      <h2>Courses</h2>
        {courses.map((course) => (
          <div>
            <Link key={course._id}>{course.courseName}</Link>
          </div>
        ))}
    </div>
  );
}

export default CourseList;
