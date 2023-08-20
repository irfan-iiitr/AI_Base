import React from 'react'

function Cards(props) {
  return (
    <div className='container my-3'>
        <div className="card">
  <img className="card-img-top" src={props.imageLink} alt="Card image cap" style={{height:'200px',width:'800px',paddingLeft:'400px'}} />
  <div className="card-body">
    <h5 className="card-title">Card title:- {props.name}</h5>
    <p className="card-text">{props.description}</p>
    <h5 className="card-title">Category:- {props.category}</h5>
    <a href={props.productLink} className="btn btn-primary">Go somewhere</a>
    
  </div>
</div>
    </div>
  )
}

export default Cards;