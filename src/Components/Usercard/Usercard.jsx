import React from 'react'

const Usercard = ({title,text}) => {
  return (
    <div className='space-x-4 p-4 w-1/2 bg-[#2F3744] text-left border border-transparent rounded-lg'>
          <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
          <p className='text-2xl text-slate-100 '>{text}</p>
    </div>
  )
}

export default Usercard
