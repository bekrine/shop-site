import React from 'react'

function Button({title,disabel}) {
  return (
    <button 
    className='text-white bg-black py-2 px-5'
    >
            <div className='my-2'>
              <span>

            {title}  
              </span>
            </div>
          </button>
  )
}

export default Button