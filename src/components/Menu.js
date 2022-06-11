import React, { useState } from 'react'
import {useSelector} from 'react-redux'
const menuStyle=' absolute top-0  bg-white h-screen  transition ease-in-out duration-500'
function Menu({Offset}) {
    // const [toggel,setToggel]=useState(true)
  const toggle=useSelector(state=>state.toggleMenu)
  return (
    <div 
        style={{top:`${Offset}px`}} 
        className={` w-1/2 ${menuStyle}
        ${toggle.istoggle && 'toggel'}`}>
          <div className='flex justify-around mt-8'>
            <span>
              <a href=''>
                  FEMME
              </a>
            </span>
            <span>
              <a href=''>
                  HOMME
              </a>
            </span><span>
              <a href=''>
                  ENFANTS
              </a>
            </span>
          </div>
          <div>
          <div className=' flex  md:hidden'>
            <div className='mr-8 '>
            <a href='' className='font-monoc'>se connecter</a>
            </div>
            <span className='mr-8 '>
            <a href='' className='font-mono'>Aide</a>
            </span>
            </div>
          </div>
        </div>
  )
}

export default Menu