import React from 'react'
import { useState } from 'react';

import CardsDisplay from './CardsDisplay';
function Screen1() {
    const [Que,setQuery]=useState('');
  return (
    <div>
       <div className="homepage">
        
    

        <div className="search-container">
       <form >
       <input type="text" className="input" placeholder="Type your text" onChange={(e)=>setQuery(e.target.value)}></input>
         <button type="submit" className='search_btn'>Submit</button>
       </form>
     </div>
       </div>

          <CardsDisplay find={Que}></CardsDisplay>
    </div>
  )
}

export default Screen1