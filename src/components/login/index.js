import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
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
      const apiUrl = "https://karyakartha-t18z.onrender.com/login"
      const userData = {email:email,password:pass}
      const options = {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
      }
      const result = await fetch(apiUrl,options)
      console.log(result)
      if (result.ok){
        navigate("/")
      }else{
        alert("Please provide valid Credentials")
      }
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

  

  const forgotPassword = () => {
    alert("This is not linked to API We're working on it : )")
  }
  
  return (
    <>
      <Header />
      <div className='login-page-main-container'>
          <div className="welcome-note-container">
              <h1 className='welcome-heading'>  Welcome back </h1>
              <h1 className='welcome-subtitle'>Glad to see you again, Login to your account below</h1>
          </div>
          <div className='login-container'>
            <h1 className='login-heading'>Login </h1>
            <div className='google-and-form-cotnainer'>
              <div className='left-side-container'>
                <div className='input-container m-0'>
                  <label htmlFor='username' className='label-name mb-2'>Username</label>
                  <input type='text' id='username' className='form-control input-text' placeholder='Enter your your Email ID'/>
                  <p className='note d-none d-md-block'> We'll send you job notifications </p>
                </div>
                <div className='input-container m-0'>
                  <label htmlFor='password' className='label-name mb-2'>Password</label>
                  <input type='password' id='password' className='form-control input-text' placeholder='Enter your password here'/>
                  <div className='note-and-forgot-container'>
                    <p className='note d-none d-md-block'>Minimum 6 characters required</p>
                    <p className='forgot-para' onClick={forgotPassword}>forgot password ?</p>
                  </div>
                </div>
                <div className='button-container'>
                  <button type='button' className='btn btn-primary login-button'>Login</button>
                  <button type='button' className='btn btn-secondary login-button'>Sign Up</button>
                </div>
              </div>
              <div className='right-side-container'>
                <div className='google-container mt-4 mt-md-0'>
                  <b>Continue with</b>
                  <div class="buttons-container">
                    <div class="google-login-button">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" class="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                          c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                          c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                          C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                          c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                          c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      </svg>
                      <span>Sign up with Google</span>
                    </div>
                  </div>
                  <p className='mt-3'> Don't have an account? <Link to="/signup"><b>Sign up here</b></Link> </p>
                </div>
              </div> 
            </div>
          </div>
      </div>
    </>
  )
}

export default Login