import React from 'react'
import Button from '../../utils/Button'

import image1 from '../../img/product.jpeg'
import image2 from '../../img/product1.jpeg'
import image3 from '../../img/product2.jpeg'


function DetaileProduct() {
  const tailles = ["Xs", "S", "M", "L", "XL", "XXL"]
  const imags=[image1,image2,image3]
  return (
    <div className='block sm:flex justify-around'>
      <div className='hidden lg:flex flex-col justify-end'>
        <div className='max-w-fit	'>
          <h1 className='uppercase text-4xl	mb-5'>title</h1>
          <p>L’objectif de la norme Green to Wear 2.0 est de réduire l’impact environnemental de la production textile. Pour cela, nous avons développé le programme The List d’Inditex qui nous aide à garantir aussi bien la propreté des processus de production que la sécurité et la santé de nos </p>
        </div>
      </div>
      <div className='h-[80vh] overflow-scroll snap-y'>
        {
          imags.map((image,index)=>{
            return(
              
                <img src={image} key={index} className='h-full object-cover snap-center'/>
            )
          })
        }
      </div>
      <div className='flex flex-col justify-end'>
        <div>
          <h1 className='uppercase text-4xl	mb-5'>title</h1>
          <p className='my-4'>disc</p>
          <h2 className='my-4'>price</h2>
        </div>
        <div className='border-y-2 border-black'>
          {
            tailles.map((taillle, index) => {
              return (
                <div className='my-2' key={index}>
                  <span>
                    {taillle}
                  </span>
                </div>
              )
            })
          }

        </div>
        <div className='m-8'>
         <Button title={'AJOUTER AU PANIER'}/>
        </div>
      </div>
    </div>
  )
}

export default DetaileProduct