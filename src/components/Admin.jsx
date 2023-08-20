import React, { useState } from 'react';
// import axios from 'axios';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AdminPanel = () => {

  // navigate=useNavigate();


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [productLink, setProductLink] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [category, setcategory] = useState('');

  // const handleSubmit =( async (event)=>{
  //   event.preventDefault();

  //   const newData = {
  //     name,
  //     description,
  //     imageLink,
  //     productLink,
  //     authorName
  //   };
    
  //   console.log(newData);
  //  try{
  //   const res = await fetch('http://localhost:5173/admin' , {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newData)
  //   })

  //   //  console.log(res);
  //   const resData = await res.json();
  //   console.log('data', res);
  //  }
  //  catch (err) {
  //   if(!resData.success)
  //   alert('Enter Valid Credentials',err);
  //   else
  //   navigate('/admin');
  //  }         
  // })


const handleSubmit = (e) => {
    e.preventDefault();
  


    Axios.post('http://localhost:5000/admin', {
          name:name,
          description:description,
          date:launchDate,
          imglink:imageLink,
          productlink:productLink,
          authorname:authorName,
          category:category
    })
    .then(response => {
      console.log('Response:', response.data);
      // Handle the response data
      // navigate('/');
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error
    });
}

  


  return (
    <form onSubmit={handleSubmit} className="m-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description:</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} required
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="launchDate" className="form-label">Launch Date:</label>
        <input
          type="date"
          className="form-control"
          id="launchDate"
          value={launchDate}
          onChange={(e) => setLaunchDate(e.target.value)} required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="imageLink" className="form-label">Image Link:</label>
        <input
          type="text"
          className="form-control"
          id="imageLink"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)} required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="productLink" className="form-label">Product Link:</label>
        <input
          type="text"
          className="form-control"
          id="productLink"
          value={productLink}
          onChange={(e) => setProductLink(e.target.value)}   required
        /> 
      </div>

      <div className="mb-3">
        <label htmlFor="authorName" className="form-label">Author Name:</label>
        <input
          type="text"
          className="form-control"
          id="authorName"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}  required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category Name:</label>
        <input
          type="text"
          className="form-control"
          id="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}  required
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="reset" className="btn btn-secondary">Reset</button>
    </form>
  );
};

export default AdminPanel;
