import React, { useState } from 'react'
import Sidenav from './SideNav'

function Dashbourd(props) {
  //const [spaceopn,setispace]=useState(true)
  const [sclose,seticlose]=useState(false)
  const handlespce=()=>{
setispace()

  }
  const handleclose=()=>{
     seticlose(true)
    
      }
  return ( <div>
    <div>
    
        <div   className=" transition-all duration-1000 ">
           
           <div   className='grid grid-cols-3 mt-'>
             <div className='w-[200px] h-[200px] bg-green-500 mt-3'>

            </div>
            <div className='w-[200px] h-[200px] bg-red-500 mt-3'>

</div>
<div className='w-[200px] h-[200px] bg-indigo-500 mt-3'>

</div>
           </div>

        </div>
    </div>

   </div>
  )
}

export default Dashbourd