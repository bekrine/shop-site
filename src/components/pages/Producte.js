import React from 'react'
import image1 from '../../img/product.jpeg'
import image2 from '../../img/product1.jpeg'
import image3 from '../../img/product2.jpeg'

function Producte() {
    let data = [{
        imge:image1,
        title:'product1',
        price:333,
        desc:"S'AGISSE DE MODÈLES PORTEFEUILLE OU AJUSTÉS, NOUS VOUS PROPOSONS TOUS LES STYLES, COULEURS ET IMPRIMÉS POUR LES ROBES DE LA SAISON."
    },
    {
        imge:image2,
        title:'product2',
        price:311,
        desc:"S'AGISSE DE MODÈLES PORTEFEUILLE OU AJUSTÉS, NOUS VOUS PROPOSONS TOUS LES STYLES, COULEURS ET IMPRIMÉS POUR LES ROBES DE LA SAISON."
    },{
        imge:image3,
        title:'product3',
        price:3223,
        desc:"S'AGISSE DE MODÈLES PORTEFEUILLE OU AJUSTÉS, NOUS VOUS PROPOSONS TOUS LES STYLES, COULEURS ET IMPRIMÉS POUR LES ROBES DE LA SAISON."
    }]
  return (
          data.map((item ,index)=>{
              return(
                <div key={index}  className='mt-[5%]'>
                    <div className='w-1/3 mx-auto my-0'>
                        
                <div>
                    <img src={item.imge} />
                </div>
                <div className='flex justify-between text-xl mt-[2%] '>
                    <span>
                        {item.title}
                    </span>
                    <span>
                        {item.price}MAD
                    </span>
                </div>
                    </div>
                <div className='w-3/4  mx-auto my-8'>
                    <p>
                        {item.desc}
                    </p>
                </div>
            </div>
              )
          })
      
    
  )
}

export default Producte