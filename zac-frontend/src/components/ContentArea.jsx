import React from 'react'
import { useAppContext } from '../context/App/AppProvider';
import Card from './Card'
import Navigation from './Navigation';
import FloatingSidebar from './FloatingSidebar';

const ContentArea = () => {

  return (
    <>
      
        <Navigation />
        <FloatingSidebar />
          <div className="flex flex-wrap">
              <Card />
          </div>
      
    </>
  )
}

export default ContentArea
