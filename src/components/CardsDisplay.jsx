import React, { useState, useEffect } from 'react';
import Cards from './Cards'


function CardsDisplay(props) {

  const [ailist,setlist]=useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/'); 
  //     // Replace with your API endpoint
  //     const data = await response.json();
      
  //     console.log('Data from API:', data);
  //     console.log('first',data);
     
  //     setlist(data.data); 
      
  //     console.log('set',ailist);
     
  //     // 
  //     // setlist(search(ailist));

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };



  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/');
      const data = await response.json();
            
  
      console.log('Data from API:', data);

      // console.log('category wala',category(data.data));

      // setlist(data.data);

      if(props.find.length > 2)
      setlist(search(data.data))
      else
      setlist(data.data); 
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
      
  }, [props.find]);

 
  console.log('Current ailist:', ailist);
  console.log(props.find.length);
  // if(props.find.length >3)
  // search(ailist);

  const search =(daata)=>{
    // console.log('search',daata);
    //  console.log('props',props.find)
     return daata.filter((listItems) => listItems.description.includes(props.find))
     
  }
  
  // const category =(daata)=>{
   
  //    return daata.filter((listItems) => listItems.category.includes('Website Builder'))
     
  // }




  return (
    <div>

<div className='container my-3 ' style={{width:'100%'}}>
{/* <button onClick={fetchData}>Fetch Data</button> */}
<div className='row'  >
              
                  {
              
                       ailist.map((listItems, index) => {
                        return(
                          <Cards key={listItems._id} name={listItems.name} description={listItems.description} imageLink={listItems.imglink}
                           productLink={listItems.productlink} category={listItems.category}></Cards>
                        )
                          
                       }) 
                       
                  }

          {/* {
              
              ailist.filter((listItems) => listItems.description.includes('and').map((item) => {
                console.log(item);
               return(
                 <Cards name={item.name} description={item.description} imageLink={item.imglink}
                  productLink={item.productlink} category={item.category}></Cards>
               )

               
                 
              }) )
              
         } */}
               
             
    
     </div> 
    </div>
    </div>
  )
}

export default CardsDisplay;