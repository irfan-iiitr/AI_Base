import React, { useState } from 'react';
import Cards from './Cards'





function CardsDisplay() {

  const [ailist,setlist]=useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/'); 
      // Replace with your API endpoint
      const data = await response.json();
      
      console.log('Data from API:', data);
      console.log('first',data.data[0]);
      setlist(data.data);
      console.log('set',ailist);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <div>

<div className='container my-3 ' style={{width:'100%'}}>
<button onClick={fetchData}>Fetch Data</button>
<div className='row'  >
              
                  {
              
                       ailist.map((listItems, index) => {
                        return(
                          <Cards name={listItems.name} description={listItems.description}></Cards>
                        )
                             
                       }) 
                       
                  }
               
             
    
     </div> 
    </div>
    </div>
  )
}

export default CardsDisplay;