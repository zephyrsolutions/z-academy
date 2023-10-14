import React from 'react'
import { useAppContext } from '../context/App/AppProvider';
import Card from './Card'

const ContentArea = () => {

  return (
    <div className="pt-16 pl-10">
        <h1 className="text-2xl font-semibold">Welcome Admin</h1>
        
        <div className="mt-6 ml-2">
            <Card />
        </div>
    </div>
  )
}

export default ContentArea
