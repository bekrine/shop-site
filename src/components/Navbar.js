import React from 'react'
import{FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faShoppingCart,faBars} from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div className='flex justify-items-center justify-between p-2.5	'>
        <div className='flex ml-4'>
            <button className=' '>
        <FontAwesomeIcon icon={faBars} className='mb-6 text-2xl 	'/>
            </button>
        <a href='' className='ml-4 ms:ml-16'>

            <span className='text-5xl lg:text-6xl'>MbStore</span>
        </a>
        </div>
        <div className='ml-14  ms:pt-2 flex items-center '>
            <span className='mr-4  lg:mr-14 border-b-2 border-neutral-800'>
            <a href=''className='uppercase mb-6 pr-7  ' >
                <span >recherche</span>
            </a>
            </span>
            
            <div className='hidden md:flex'>
            <div className='mr-8 '>
            <a href='' className='font-monoc'>se connecter</a>
            </div>
            <span className='mr-8 '>
            <a href='' className='font-mono'>Aide</a>
            </span>
            </div>
            <div className='  mr-6 ms:mr-8 '>
                <span>

            <FontAwesomeIcon icon={faShoppingCart} />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar