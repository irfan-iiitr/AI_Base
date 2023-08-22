import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  let navigate = useNavigate()
 const [first,setFirst] =useState({fname:"",lname:"",email:"",password:""})

 const handleInput=(event)=>{
    setFirst({...first,[event.target.name]:event.target.value})
 };

const handleSubmit =(async(event)=>{
      event.preventDefault();
     
      const res = await fetch('http://localhost:5000/api/register' , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(first)
      })

      const resData = await res.json()
      console.log('data', resData);

      if(!resData.success)  
      alert('Enter Valid Credentials');
      else
      navigate('/login')

               
    })
 

  return (
    <div>
  
<section className="">

  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor:"hsl(0, 0%, 96%)"}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form onSubmit={handleSubmit}>
       
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" name="fname" onChange={handleInput} value={first.fname} />
                      <label className="form-label"   >First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" name="lname"  className="form-control" onChange={handleInput} value={first.lname}/>
                      <label className="form-label"     >Last name</label>
                    </div>
                  </div>
                </div>

             
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" name="email" onChange={handleInput} value={first.email} />
                  <label className="form-label"  >Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4"  name="password" className="form-control" onChange={handleInput} value={first.password} />
                  <label className="form-label"    >Password</label>
                </div>

             

          
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

              
                <div className="text-center">
                  <p>or sign up with:</p>
                  

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

    </div>
  )

  }

