import { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Studentsprovider from './Studentsprovider'
function App() {
  

  return ( 

    <div className='  flex-col flex gap-5'>
     <Navbar bgcolorstulist={"#FFFFFF"} textstulist={"#000000"}></Navbar>
      
    <Card></Card>
      </div>
    
    
  )
}

export default App
