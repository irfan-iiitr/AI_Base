import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
     const navigate = useNavigate();
    const [first,setFirst] =useState({email:"",password:""})

    // const handleInput=((event)=>{
    //   ;
   
    //    setFirst({...first,[event.target.name]:event.target.value})
    // });


    const handleInput=((event)=>{
      event.preventDefault();

      setFirst({...first,[event.target.name]:event.target.value})
     
   });

    


    
  
    const handleSubmit =(async(event)=>{
      event.preventDefault();
    
      const res = await fetch('http://localhost:5000/api/login' , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(first)
      })
      
      if(res.status===400)
      {
        alert('Invalid credentials');
      }
      else{
        const resData = await res.json()
        console.log('data', resData);
  
        if(resData.token){
          localStorage.setItem('user:token', resData.token)
          localStorage.setItem('user:detail', JSON.stringify(resData.user))
          
           navigate('/');
        }
        else{
          alert('Enter Correct Credentials');
        }
      }
   
               
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
     
        

           
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" name="email" value={first.email}  onChange={handleInput} />
                <label className="form-label"  name="email" >Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" name='password'  value={first.password}  onChange={handleInput} />
                <label className="form-label"  name="password">Password</label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Log In
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
