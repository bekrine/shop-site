import React, { useState } from 'react'
import Slaider from '../Slaider'
import Menu from '../Menu';
import ShopeCard from './ShopeCard';
function Home() {
   const [Offset,setOffset]=useState()
  return (
      <>
   <Slaider setOffset={setOffset}/>
   <Menu Offset={Offset}/>
   <ShopeCard/>
      </>

  )
}

export default Home