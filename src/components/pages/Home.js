import React, { useState } from 'react'
import Slaider from '../Slaider'
import Menu from '../Menu';
function Home() {
   const [Offset,setOffset]=useState()
  return (
      <>
   <Slaider setOffset={setOffset}/>
   <Menu Offset={Offset}/>
      </>

  )
}

export default Home