import React from 'react'
import image2 from '../../img/product1.jpeg'
import {useSelector} from 'react-redux'

function ShopeCard() {
    const istoggle=useSelector(state=>state.toggleCard.istoggle)
    const dataCard=useSelector(state=>state.dataManger)
    // console.log("dd",dataCard)
    

  return (
      <>
      <div className={`hidden sm:inline w-1/2 absolute  top-[80px] h-screen bg-slate-200 overflow-hidden ${istoggle && "toggelcard"}`}>

      </div>
    <div 
    className={`w-full sm:w-1/2 absolute  top-[80px] h-screen bg-white right-0 overflow-scroll ${istoggle && "toggelcard"} `}
    >
        <div>
            {
                dataCard.length>0 ? 
                    dataCard.map((item ,index)=>{

                        return(
                            <div key={index} className='mb-7'>
                        <h1 className='my-2 ml-20'>{item.payload.title}</h1>
                        <div className='flex justify-center '>
                            <div className='w-1/2'>
                                <img src={item.payload.imge}/>
                            </div>
                            <div className='flex flex-col justify-around ml-3'>
                                <h2>taille:40</h2>
                                <div className='flex justify-between'>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <h2>{item.payload.price}</h2>
                            </div>
                        </div>
                    </div>
                            )
                    })
                : 'card is empthy'
            }
            

           
          
        </div>
        <div>
            <span>TOTLE:</span>
        </div>
    </div>
    </>
  )
}

export default ShopeCard