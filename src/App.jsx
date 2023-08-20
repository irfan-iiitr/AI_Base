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
import CardsDisplay from './components/CardsDisplay';

// import './index.css'

function App() {
    const [Que,setQuery]=useState('');
     //console.log(query,'query')
  return (
         <>
                <Router>
             <NavBar></NavBar>
             <div className="homepage">
        
    

        <div className="search-container">
       <form >
       <input type="text" className="input" placeholder="Type your text" onChange={(e)=>setQuery(e.target.value)}></input>
         <button type="submit" className='search_btn'>Submit</button>
       </form>
     </div>
       </div>
             <Routes>
             {/* <Route exact path="/" element={<Home></Home>} /> */}
                      {/* <Route path='/c' element={<Categories></Categories>}></Route> */}
                      <Route path='/admin' element={<Admin></Admin>}></Route>

                     
             </Routes>
         
         <CardsDisplay find={Que}></CardsDisplay>
         </Router>
         </>
  )
}

export default App
