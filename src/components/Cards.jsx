import React from 'react'

function Cards(props) {
  return (
    <div className='container my-3'>
        <div className="card">
  <img className="card-img-top"  alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.{props.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default Cards;