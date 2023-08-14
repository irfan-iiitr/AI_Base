import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="homepage">
        
    

     <div className="search-container">
    <form action="/search">
    <input type="text" name="text" className="input" placeholder="Type your text"></input>
      <button type="submit" className='search_btn'>Submit</button>
    </form>
  </div>
    </div>
  );
};

export default Home;
