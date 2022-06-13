import React from 'react'
import image2 from '../../img/product1.jpeg'

function Recherche() {
  return (
    <div>
        <div className='border-b-2 border-black ml-[15%] w-[80%] mt-[7%]	 '>
            <input
             placeholder='RECHERCHER'
             className='w-full'/>
        </div>
        <div className='block  sm:grid gap-4 grid-cols-3 grid-rows-3 justify-items-center mt-12'>

        <div className='my-4 mx-auto w-1/2 sm:w-[70%]'>
            <a>
                <img src={image2}/>
            </a>
        </div>
        
        <div className='my-4 mx-auto w-1/2  sm:w-[70%]'>
            <a>
                <img src={image2}/>
            </a>
        </div>
        <div className=' my-4 mx-auto w-1/2 sm:w-[70%]'>
            <a>
                <img src={image2}/>
            </a>
        </div>
        
        </div>
    </div>
  )
}

export default Recherche