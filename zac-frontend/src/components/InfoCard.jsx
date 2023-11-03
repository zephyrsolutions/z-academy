// DepartmentList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGraduationCap, FcPlus } from "react-icons/fc";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Navigation from './Navigation';
import FloatingSidebar from './FloatingSidebar';

function InfoCard(props) {
 
  return (
    <>
    <Navigation />
    <FloatingSidebar />
    
     <div className="flex flex-wrap">
        
          <div key={props.id} className="w-64 h-[150px] lg:w-auto lg:h-[180px]">
            <Link to={`/course/${props.departmentId}`}>
              <div className="md:px-12 py-6">
                <div className="sm:p-2 lg:p-10 max-w-sm mx-auto bg-white hover:border-l-2 border-b-2 hover:border-blue-200 rounded-xl shadow-lg flex items-center space-x-4">
                  <div>
                    <FcGraduationCap className="h-14 w-16" />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-blue-900">
                      {props.departmentName ? (props.departmentName) : (props.courseName)}
                      <p className="text-slate-500 text-base">By Ankur Goswami</p>
                    </div>
                  </div>
                  <div>
                    <AiOutlineDelete className="h-6 w-6 mb-8 cursor-pointer" />
                    <AiOutlineEdit className="h-6 w-6 cursor-pointer" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
       
      </div>
    
    </>
  );
}

export default InfoCard;
