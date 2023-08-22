import './App.css'
import NavBar from './components/Navbar'
import Home from './components/Home'
import { useState } from 'react'
import Admin from './components/Admin'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Screen1 from './components/Screen1'
import Login from './components/Login'
import General from './components/General'

// import './index.css'

function App() {

     //console.log(query,'query')
  return (
         <>
                <Router>
             <NavBar></NavBar>
            {/* <Screen1></Screen1> */}
            

             
             <Routes>
             <Route exact path="/" element={<Screen1></Screen1>} />
                      {/* <Route path='/c' element={<Categories></Categories>}></Route> */}
                      <Route path='/admin' element={<Admin></Admin>}></Route>
                      <Route path='/register' element={<Home></Home>}></Route>
                      <Route path='/login' element={<Login></Login>}></Route>
                      <Route path='/general' element={<General></General>}></Route>
             </Routes>
      
         </Router>
         </>
  )
}

export default App
