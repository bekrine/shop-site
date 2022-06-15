import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {toggle} from '../featuers/toggelMenu/toggelMenu'
import {toggleCard} from '../featuers/toggelcard/toggelcard'
import{FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faShoppingCart,faBars} from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    const dispatch=useDispatch()
  return (
    <div className='flex justify-items-center justify-between p-2.5	'>
        <div className='ml-0 flex sm:flex ml-4'>
            <button className=' '>
        <FontAwesomeIcon 
            icon={faBars}
            className='mb-6 text-2xl'
            onClick={()=>dispatch(toggle())}/>
            </button>
        <span href='' className='ml-[.5rem] sm:ml-4'>
            <span className='text-5xl lg:text-6xl'>
                <Link to='/'>MbStore</Link>
                 </span>
        </span>
        </div>
        <div className='ml-14  ms:pt-2 flex items-center '>
            <span className='mr-4  lg:mr-14 border-b-2 border-neutral-800'>
        
                <Link className='uppercase mb-6 pr-7  ' to='recherch' >

                <span >recherche</span>
                </Link>
            
            </span>
            
            <div className='hidden md:flex'>
            <div className='mr-8 '>
            <a href='' className='font-monoc'>se connecter</a>
            </div>
            <span className='mr-8 '>
            <a href='' className='font-mono'>Aide</a>
            </span>
            </div>
            <div 
            className='  mr-6 ms:mr-8 '
            onClick={()=>dispatch(toggleCard())}>
                <span>

            <FontAwesomeIcon icon={faShoppingCart} />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar