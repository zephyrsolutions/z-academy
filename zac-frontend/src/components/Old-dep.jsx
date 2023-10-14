// DepartmentList.js
import React from 'react';
import { useAppContext } from '../context/App/AppProvider';
import { Link } from 'react-router-dom'
import { FcGraduationCap, FcPlus } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";

function DepartmentList() {
  const { departments } = useAppContext();

  return (
    
    <div className="pt-16 pl-6 md:pl-8">
        <h1 className="text-2xl font-semibold">Welcome Admin</h1>
        <h2 className="text-xl font-medium">Departments</h2>

        <div className="pt-8">
          <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center"><FcPlus className="fill-current w-8 h-8 mr-2" /><span>Add Department</span></button>
        </div>

        <div className="lg:flex md:flex-row mt-4 md:pl-8 pl:2">
          {departments.map((department) => (
            <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center">
              <Link key={department._id} to={`/course/${department._id}`}>
              <div className="md:px-16 py-8">
                <div className="p-2 md:p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div>                         
                        <FcGraduationCap className="h-14 w-16" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-blue-900">
                            {department.departmentName}
                            <p className="text-slate-500 text-base">By Ankur Goswami</p>
                        </div>
                    </div>
                    <div>
                    <AiOutlineDelete className="h-6 w-6 mb-8 cursor-pointer" />
                    </div>
                </div>
              </div>
              </Link>
            </div>  
                  
          ))}  
        </div>
    </div>
  );
}

export default DepartmentList;
