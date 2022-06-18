import React from 'react'
import { useParams , Link} from 'react-router-dom'
import {data} from '../../data/data'

function Producte() {
    const param=useParams()
    const filterData= data.filter(item=> {

        if(param.prod){
            return item.gender === param.type && item.type === param.prod
        }
       return item.gender === param.type
    }) 
  return (
          filterData.map((item ,index)=>{
              return(
                <div key={index}  className='mt-[5%]'>
                    <div className='w-1/3 mx-auto my-0'>
                        
                <div>
                    <Link to={`/detailProduct/${item.id}`}>
                    <img src={item.imge} />
                    </Link>
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