// DepartmentList.js
import React from 'react';
import { useAppContext } from '../context/App/AppProvider';
import { Link } from 'react-router-dom'


function DepartmentList() {
  const { departments } = useAppContext();

  return (

    <div className="pt-16 pl-10">
        <h1 className="text-2xl font-semibold">Welcome Admin</h1>
        <h2>Departments</h2>  
        <div className="mt-6 ml-2">
          {departments.map((department) => (
            <div>
              <Link key={department._id} to={`/course/${department._id}`}>{department.departmentName}</Link>
            </div>        
          ))}  
        </div>
    </div>
  );
}

export default DepartmentList;
