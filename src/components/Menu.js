import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../featuers/toggelMenu/toggelMenu'
import {useSelector} from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
const menuStyle=' absolute top-0  bg-white h-screen  transition ease-in-out duration-500'
function Menu({Offset}) {
  const dispatch=useDispatch()
  const [getType,setGetType]=useState('homme')
  const toggl=useSelector(state=>state.toggleMenu)

  const cardeClose = (e)=>{
    const gender=e.target.id
      setGetType(gender)
    dispatch(toggle())
  }


  return (
    <div 
        style={{top:`${80}px`,zIndex:1}} 
        className={` w-full sm:w-1/2${menuStyle}
        ${toggl.istoggle && 'toggel'}`}>
          <div className='flex justify-around mt-8'>

            <span  onClick={(e)=>cardeClose(e)} >
              <Link id='femme' to="/products/femme">
                  FEMME
              </Link>
              
            </span>
            <span  onClick={(e)=>cardeClose(e)}>
              <Link id='homme' to='/products/homme'>
                  HOMME
              </Link>
              
            </span>
            <span  onClick={(e)=>cardeClose(e)}>
              <Link id='enfant' to='/products/enfant'>
                  ENFANTS
              </Link>
            </span>
          </div>


            <div className='flex flex-col items-center mt-10'>
              <div className='m-2' onClick={()=>dispatch(toggle())}>
                <Link to={`/products/${getType}/tshirt`}>
                  T-shirte
                </Link>
              </div>
              <div className='m-2' onClick={()=>dispatch(toggle())}>
                <Link to={`/products/${getType}/chouse`}>
                  chouse
                </Link>
                
              </div>
              <div className='m-2' onClick={()=>dispatch(toggle())}>
                <Link to={`/products/${getType}/pants`}>
                pants
                </Link>
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