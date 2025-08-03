import React from 'react'
import ProfileImageUpload from "../../ProfileImageUpload/ProfileImageUpload"; 
const Header = () => {
  return (
    <div className='flex justify-between bg-[#2F3744]  items-center'>
          <div className='p-2'>
              <h2 className='text-3xl font-bold text-slate-100'>Dashboard</h2>
          </div>
           <div className=" m-2 flex  border border-transparent rounded-lg">
              <div>
                <ProfileImageUpload />
              </div>
              <div className="p-2 ">
                <h2 className="text-lg text-slate-100 font-semibold pt-2">
                  Faizan Jabbar
                </h2>
                <h2 className="text-lg text-slate-100 font-semibold">
                  Faizanjabar@gmail.com
                </h2>
              </div>
            </div>
    </div>
  )
}

export default Header
