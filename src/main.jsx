import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Favouritestudent from './Components/Favouritecards.jsx'
import Favouritecontainer from './Favouritecontainer.jsx'
import Studentsprovider from './Studentsprovider.jsx'
createRoot(document.getElementById('root')).render(
 <div>
    <BrowserRouter>
    <Studentsprovider>
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/FavouriteStudents' element={<Favouritecontainer></Favouritecontainer>}></Route>
    </Routes>
    </Studentsprovider>
    </BrowserRouter>
 </div>

)
