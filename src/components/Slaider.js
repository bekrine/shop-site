import React, { useEffect, useRef, useState } from 'react'
import slidimg from '../img/sliderimg.jpeg'
import slidimg1 from '../img/sliderimg1.jpeg'
import slidimg2 from '../img/sliderimg2.jpeg'

function Slaider() {
   const refs =useRef([])
   const [imag,setImag]=useState([
       slidimg,
       slidimg1,
       slidimg2
   ])
   const [factor,setFactor]=useState(100)
   const [position,setPosition]=useState(0)
    useEffect(()=>{
        const slide=setTimeout(()=>{
            // refs.current[position].className='full'
            
        },3000)
        return()=>{
        clearTimeout(slide)
        }
    },[])
console.log(refs.current)

  return (
    <div className='relative h-screen '  >
        {imag.map((item,index)=>{
            return<div ref={rf=>(refs.current[index]=rf)} key={index} style={{transform:`translate(${index*factor}%)`}}  className='absolute '>
            <img src={item}  />
            </div>
        })}
        {/* <div ref={ref1}  className='absolute '>
        <img src={slidimg}  />
        </div>
        <div ref={ref2} className='absolute qcive '>
        <img src={slidimg1 } />
        </div>
        <div ref={ref3}  className='absolute qcives'>
        <img src={slidimg2}  />
        </div> */}
    </div>
  )
}

export default Slaider