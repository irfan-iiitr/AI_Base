import React, { useState } from 'react'
import { useEffect } from 'react';
import Cards from './Cards';
function General() {
     
  const [list,setList]=useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/Productivity');
      const data = await response.json();
      setList(data);
  
      console.log('Data from API:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
      
  }, []);

  
  return (
   <>
    <div>General</div>
    
<div className='container my-3 ' style={{width:'100%'}}>
{/* <button onClick={fetchData}>Fetch Data</button> */}
<div className='row'  > 
              
                  {
              
                       list.map((listItems, index) => {
                        return(
                          <Cards key={listItems._id} name={listItems.name} description={listItems.description} imageLink={listItems.imglink}
                           productLink={listItems.productlink} category={listItems.category}></Cards>
                        )
                          
                       }) 
                       
                  }


               
             
    
     </div> 
    </div>
   </>
  )
}

export default General