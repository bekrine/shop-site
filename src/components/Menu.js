import React, { useState } from 'react'

function Menu({Offset}) {
    const [toggel,setToggel]=useState(true)
  return (
    <div style={{top:`${Offset}px`}} className={`absolute top-0 w-6/12 bg-white h-screen ${toggel && 'toggel'}`}>Menu</div>
  )
}

export default Menu