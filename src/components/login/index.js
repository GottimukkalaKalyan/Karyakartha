import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../../AuthContext';


import './index.css'
import Header from '../header';



const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const { login } = useAuth();

  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && pass !== ""){
      login(true)
      navigate("/home")
      // const apiUrl = "https://karyakartha1.onrender.com/login"
      // const userData = {email:email,password:pass}
      // const options = {
      //   method:"POST",
      //   body:JSON.stringify(userData)
      // }
      // const result = await fetch(apiUrl,options)
      // console.log(result)
    }
  }

  const changeEmail = (event) => {
   setEmail(event.target.value)
  }
  const changePassword = (event) => {
   setPass(event.target.value)
  }

  const navigateToForgot = (event) => {
    navigate("/forgot")
  }
  const goToSignUp = () => {
    navigate("/signup")
  }
  
  return (
    <>
      <Header />
      <div className='Wrapper'>
          <div className="welcome">
              <h1 className='Title'> <img src="" width={25}/> Welcome back </h1>
              <h1 className='SubTitle'>Glad to see you again, Login to your account below</h1>
          </div>
          <div className="Container">
          
              <div className="Left">
                  <form onSubmit={handleSubmit}>
                      <h1>Login</h1>
                      <label htmlFor="Email">Email ID</label>
                      <input className='Email' type="email" placeholder='Enter your Email ID' value={email}  onChange={changeEmail}/> <br />
                      <h4>We’ll send you job notifications </h4>
                      <label htmlFor="Password">Password</label>
                      <input className='Password' type="password" placeholder='Enter your password here' value={pass} onChange={changePassword}/> <br />
                      <h4>Minimum 6 characters required <span className='Frgtpss' onClick={navigateToForgot}>Forgot Password?</span> </h4>
                      <button type= "submit" className='btn_Login'>Login</button>
                      <h4 onClick={goToSignUp} className='signup-here-heading'>Don’t have an account? <span className='Sign_up'> Signup here </span></h4>
                  </form>
              </div>
              <div className="Gap">
              </div>
              <h2 className='OR'>Or</h2>
              <div className="Right">
              {/* <AiOutlineClose className='Close'/> */}
                  <div className="text">
                      <h2 className="Cntnue">Continue with</h2>
                  </div>
                  <button className='google-Logo'> <img src="" width={35}/>Google</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default Login