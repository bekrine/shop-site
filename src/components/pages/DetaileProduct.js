import React from 'react'
import {tailles,tailleshose} from '../../data/data'
import { useDispatch } from 'react-redux'
import {dataSlicer} from '../../featuers/dataManger/dataManger'
import { useParams } from 'react-router-dom'
import Button from '../../utils/Button'
import { data } from '../../data/data'
import {toggleCard} from '../../featuers/toggelcard/toggelcard'

function DetaileProduct() {
  const param = useParams()
  const dispatch=useDispatch()

  const addTocard=(product)=>{
   dispatch( dataSlicer(...product))
   dispatch(toggleCard())
    
  }

  const product = data.filter(product => product.id === parseInt(param.id))
  let taille=null
  product[0].type === 'chouse'? taille=tailleshose : taille= tailles
  return (
    <div className='block sm:flex justify-around'>
      <div className='hidden lg:flex flex-col justify-end'>
        <div className='max-w-fit	'>
          <h1 className='uppercase text-4xl	mb-5'>Info plus</h1>
          <p>{product[0].plusinfo}</p>
        </div>
      </div>
      <div className='h-[80vh] overflow-scroll snap-y'>
        <img src={product[0].imge} className='h-full object-cover snap-center' />
        <img src={product[0].detailIlg.detail1} className='h-full object-cover snap-center' />
        <img src={product[0].detailIlg.detail2} className='h-full object-cover snap-center' />
      </div>
      <div className='flex flex-col justify-end'>
        <div>
          <h1 className='uppercase text-4xl	mb-5'>{product[0].title}</h1>
          <p className='my-4'>{product[0].desc}</p>
          <h2 className='my-4'>{product[0].price} DH</h2>
        </div>
        <div className='border-y-2 border-black'>
          {
            taille.map((tail, index) => {
              return (
                <div className='my-2' key={index}>
                  <span  id={tail} onClick={(e)=>console.log(e.target.id)}>
                    {tail}
                    
                  </span>
                </div>
              )
            })
          }

        </div>
        <div onClick={()=>addTocard(product)} className='m-8'>
          <Button 
          title={'AJOUTER AU PANIER'} 
          />
        </div>
      </div>
    </div>
  )
}

export default DetaileProduct