// DepartmentList.js
import React from 'react';
import { useAppContext } from '../context/App/AppProvider';
import { Link } from 'react-router-dom'


function DepartmentList() {
  const { departments } = useAppContext();

  return (
    <div>
      <h2>Departments</h2>
      
        {departments.map((department) => (
        <div>
          <Link key={department._id} to={`/course/${department._id}`}>{department.departmentName}</Link>
        </div>
      
        ))}
      
    </div>
  );
}

export default DepartmentList;
