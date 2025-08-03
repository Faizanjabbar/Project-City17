import React from 'react'
import Dash from '../../assets/Dash.svg'
import Setting from '../../assets/Setting.svg'
import { useNavigate } from 'react-router-dom';
import Settings from '../Settings/Settings';
import Dashboard from '../Dashboard/Dashboard';
const Sidebar = () => {

   const navigate = useNavigate();


  return (
     <div className=' bg-[#343B47] h-screen border-r-2 border-slate-400'>
          <div className='flex justify-center items-center gap-3 pl-6 py-4'>
              <h2 className='font-bold text-4xl text-slate-300'>City17</h2>
    </div>
  <div className="flex items-center gap-3 pl-6 py-4">
    <img src={Dash} alt="dashboard" className="w-6 h-6" />
    <button className="font-bold text-xl text-slate-300" onClick={() => navigate("/Dashboard")}>Dashboard </button>
  </div>


  <div className="flex items-center gap-3 pl-6 py-4">
    <img src={Setting} alt="setting" className="w-6 h-6" />
     <button className="font-bold text-xl text-slate-300" onClick={() => navigate("/Settings")}>Settings</button>
  </div>
</div>

  )
}

export default Sidebar
