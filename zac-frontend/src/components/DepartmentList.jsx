// DepartmentList.js
import React from 'react';
import { useAppContext } from '../context/AppProvider';

function DepartmentList() {
  const { departments } = useAppContext();

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((department) => (
          <li key={department._id}>{department.departmentName}</li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentList;
