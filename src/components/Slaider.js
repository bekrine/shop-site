import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {nextImg ,previousImg,sliderDots} from '../utils/controlSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft,faAngleDoubleRight,faC,faCircle } from '@fortawesome/free-solid-svg-icons'
import {dataSlaider} from '../data/data'


function Slaider({setOffset}) {
   const sliderRef =useRef()
   
   const [factor,setFactor]=useState(0)
   const [transition,setTransition]=useState(true)
    useEffect(()=>{
    setOffset(sliderRef.current.offsetTop)

        const slide=setInterval(()=>{
            if(factor<dataSlaider.length-1){
                setTransition(true)
                setFactor(factor+1)
            }else{
                setTransition(false)
                setFactor(0)
            }
        },5000)
        return()=>{
        clearInterval(slide)
        }
    },[factor])

  return (

    <div ref={sliderRef} className=' relative h-screen w-screen overflow-hidden '  >
        {dataSlaider.map((item,index)=>{
            return<div  key={index} 
            style={{transform:`translate(${(index-factor)*100}%)`}} 
             className={transition ? 'absolute w-screen h-screen transition ease-in-out duration-500':'absolute w-screen h-screen'} >
                 <Link to={`/products/${item.type}`}>
            <img src={item.img} className='w-screen h-screen '  />
                 </Link>
            </div>
        })}

        <FontAwesomeIcon 
        onClick={()=>previousImg(factor,setFactor)}
        icon={faAngleDoubleLeft} 
        className='hidden md:inline absolute top-1/4 left-9 text-5xl' />
        <FontAwesomeIcon 
        onClick={()=>nextImg(factor,setFactor,dataSlaider.length)}
        icon={faAngleDoubleRight} 
        className='hidden md:inline absolute top-1/4 right-9 text-5xl' />
        <div className='absolute flex bottom-20 left-1/2 '>

        {
            dataSlaider.map((item,index)=>{
                return(
                    <div
                    onClick={(e)=>sliderDots(e,setFactor,factor)}
                     className={index===factor ?'bg-black w-5 h-5 border-2 border-black rounded-full m-1.5 ':'w-5 h-5 border-2 border-black rounded-full m-1.5'} 
                    id={index}
                     key={index}></div>               
                    )
                })
            }
            </div>
    </div>
  )
}

export default Slaider