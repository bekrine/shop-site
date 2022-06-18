import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {deletItem} from '../../featuers/dataManger/dataManger'
import { toggleCard } from '../../featuers/toggelcard/toggelcard'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

function ShopeCard() {
    const dispatch=useDispatch()
    const istoggle=useSelector(state=>state.toggleCard.istoggle)
    let  dataCard=useSelector(state=>state.dataManger) 
    const [price,setPrice]=useState(0)

    useEffect(()=>{
     countPricce(dataCard)   
    })
    const countPricce=(dataCard)=>{
        let total
        dataCard.foreach(p=>total+=p.payload[0].price)
        setPrice(total)
    }

    const deletItems=(id)=>{
       let newdataCard=dataCard.filter(card=>card.payload[0].id !== id)
       dispatch(deletItem(newdataCard))
       countPricce(dataCard)
    }

  return (
      <>
      <div onClick={()=>dispatch(toggleCard())} className={`none sm: w-1/2 absolute  top-[80px] h-screen bg-slate-200 overflow-hidden ${istoggle && "toggelcard"}`}>

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
                                <div className='flex justify-between'>
                        <h1 className='my-2 ml-20'>{item.payload[0].title}</h1>
                                <FontAwesomeIcon onClick={()=>deletItems(item.payload[0].id)} className='mr-6' icon={faXmark}/>

                                </div>
                        <div className='flex justify-center '>
                            <div className='w-1/2'>
                                <img src={item.payload[0].imge}/>
                            </div>
                            <div className='flex flex-col justify-around ml-3'>
                                <h2>taille:{item.payload.tail}</h2>
                                <div className='flex justify-between'>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <h2>{item.payload[0].price} DH</h2>
                            </div>
                        </div>
                    </div>
                            )
                    })
                : <div className='flex justify-center p-10'>
                    card is empthy
                </div>
            }
            

           
          
        </div>
        <div className='fixed bottom-2 right-[20%]'>
            <span className='text-3xl'>TOTLE: {price}DH</span>
        </div>
    </div>
    </>
  )
}

export default ShopeCard