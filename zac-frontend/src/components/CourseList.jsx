// DepartmentList.js
import React from 'react';
import { useAppContext } from '../context/AppProvider';

function CourseList() {
  const { courses } = useAppContext();

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>{course.courseName}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
