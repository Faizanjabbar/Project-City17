import React from 'react'
import Usercard from '../Usercard/Usercard'

const Cardcontainer = () => {
  return (
    <div className='flex justify-center items-center gap-4 p-4 '>
          <Usercard
              title={"0"}
              text={"People Reached"}
          />
          <Usercard
              title={"0H"}
              text={"Hours Spent"}
          />
          <Usercard
              title={"0"}
              text={"Displays Palys"}
          />
          <Usercard
              title={"0"}
              text={"Total Spent"}
      />
    </div>
  )
}

export default Cardcontainer
