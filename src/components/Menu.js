import React, { useState } from 'react'
import {useSelector} from 'react-redux'
const menuStyle=' absolute top-0  bg-white h-screen  transition ease-in-out duration-500'
function Menu({Offset}) {
  const toggle=useSelector(state=>state.toggleMenu)
  return (
    <div 
        style={{top:`${80}px`}} 
        className={` w-full sm:w-1/2${menuStyle}
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


            <div className='flex flex-col items-center mt-10'>
              <div className='m-2'>
                <a>
                  T-shirte
                </a>
              </div>
              <div className='m-2'>
                <a>
                  chouse
                </a>
              </div>
              <div className='m-2'>
                <a>
                pants
                </a>
              </div>
              <div className='m-2'>
                <a>
                hats
                </a>
              </div>
            </div>
          
          <div className='relative left-[10%] top-[4%] bottom-3  md:hidden'>
            <div className='m-4 '>
            <a href='' className='font-monoc'>se connecter</a>
            </div>
            <span className='m-4 '>
            <a href='' className='font-mono'>Aide</a>
            </span>
            </div>
          
        </div>
  )
}

export default Menu