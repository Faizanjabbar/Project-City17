import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
      <>
           <div className="flex  ">
  {/* Sidebar */}
  <div className="w-1/5 bg-[#2F3744] text-white border-r-2 border-slate-400">
    <Sidebar />
  </div>

  {/* Main content */}
  <div className="w-4/5 bg-[#F8F9FF] ">
    <Header />
    <div className="bg-[#4D5155]">
      <Outlet />
    </div>
  </div>
</div>
    </>
  )
}

export default Layout
