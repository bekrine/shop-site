import React, { useState } from 'react'
import Slaider from '../Slaider'
function Home() {
   const [Offset,setOffset]=useState()
  return (
      <>
   <Slaider setOffset={setOffset}/>
      </>

  )
}

export default Home