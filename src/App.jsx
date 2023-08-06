import './App.css'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Admin from './components/Admin'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {

       

  return (
         <>
                <Router>
             <NavBar></NavBar>
             <Routes>
             <Route exact path="/" element={<Home></Home>} />
                      {/* <Route path='/c' element={<Categories></Categories>}></Route> */}
                      <Route path='/admin' element={<Admin></Admin>}></Route>

                     
             </Routes>
         
         
         </Router>
         </>
  )
}

export default App
