import React, { useState } from 'react'
import { FcPlus } from "react-icons/fc";
import Modal from "./Modal"

const departmentForm = () => {
  return(
    <div className="py-6 px-6 lg:px-8 text-left">
      <h3 className="mb-4 text-xl font-medium text-gray-900">
        Sign in to our platform
      </h3>
      <form className="space-y-6" action="#">
        <div>
          <label 
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900">
            Your Email
          </label>
          <input 
          type="email" 
          name="email" 
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="abc@abc.com"
          required
          />
        </div>
      </form>
    </div>
  )
}


const AddButton = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center" onClick={() => setShowModal(true)}>
          <FcPlus className="fill-current w-8 h-8 mr-2" />
          <span>Add Department</span>
        </button>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          {departmentForm()}
        </Modal>
    </>
  )
}

export default AddButton
