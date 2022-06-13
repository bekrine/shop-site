import React from 'react'
import image2 from '../../img/product1.jpeg'
import {useSelector} from 'react-redux'

function ShopeCard() {
    const istoggle=useSelector(state=>state.toggleCard.istoggle)
    console.log(istoggle)
  return (
    <div className={`w-full sm:w-1/2 absolute  top-[80px] h-screen bg-white right-0 overflow-scroll ${istoggle && "toggelcard"} `}
    >
        <div>
            {/* -------------------- */}
            <div className='mb-7'>
                <h1 className='my-2 ml-20'>title</h1>
                <div className='flex justify-center '>
                    <div className='w-1/2'>
                        <img src={image2}/>
                    </div>
                    <div className='flex flex-col justify-around ml-3'>
                        <h2>taille:40</h2>
                        <div className='flex justify-between'>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <h2>price:1000</h2>
                    </div>
                </div>
            </div>
            {/* -------------------- */}
            <div className='mb-7'>
                <h1 className='my-2 ml-20'>title</h1>
                <div className='flex justify-center '>
                    <div className='w-1/2'>
                        <img src={image2}/>
                    </div>
                    <div className='flex flex-col justify-around ml-3'>
                        <h2>taille:40</h2>
                        <div className='flex justify-between'>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <h2>price:1000</h2>
                    </div>
                </div>
            </div>
            {/* -------------------- */}            <div className='mb-7'>
                <h1 className='my-2 ml-20'>title</h1>
                <div className='flex justify-center '>
                    <div className='w-1/2'>
                        <img src={image2}/>
                    </div>
                    <div className='flex flex-col justify-around ml-3'>
                        <h2>taille:40</h2>
                        <div className='flex justify-between'>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <h2>price:1000</h2>
                    </div>
                </div>
            </div>
            {/* -------------------- */}
        </div>
        <div>
            <span>TOTLE:</span>
        </div>
    </div>
  )
}

export default ShopeCard