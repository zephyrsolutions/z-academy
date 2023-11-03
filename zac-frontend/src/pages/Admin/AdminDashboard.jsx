import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../components/Logout'
import Sidebar from '../../components/Sidebar'
import ContentArea from '../../components/ContentArea'
import Navigation from '../../components/Navigation'
import FloatingSidebar from '../../components/FloatingSidebar'

const AdminDashboard = () => {

  return (
    <>
      <div class="flex">
          <aside class="h-screen sticky top-0">
            <Sidebar />
          </aside>

          <main className="py-16 px-2">
            <h1 className="text-2xl font-semibold">Welcome Admin</h1>
            <h2 className="text-xl font-medium">Dashboard</h2>
            
            <section className="lg:flex flex-wrap">
              <ContentArea />
            </section>
          </main>
      </div>
    </>    
  )
}

export default AdminDashboard