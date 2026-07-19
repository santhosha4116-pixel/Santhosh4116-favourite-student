import { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Studentsprovider from './Studentsprovider'
function App() {
  

  return ( 

    <div className='  flex-col flex gap-5'>
     <Navbar></Navbar>
      
    <Card></Card>
      </div>
    
    
  )
}

export default App
