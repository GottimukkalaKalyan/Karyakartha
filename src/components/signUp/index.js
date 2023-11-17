import { useNavigate } from 'react-router-dom'
import {useState} from "react"

import {FcGoogle} from 'react-icons/fc' 
import 'reactjs-popup/dist/index.css'
import './index.css'



const RenderDesktopView = () => {

    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [Password, setPassword] = useState("")
    const [MobileNumber, setMobileNumber] = useState("")
    const [isLoading, setLoading] = useState(false)

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changeFullName = (event) => {
        setFullName(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const changeMobileNumber = (event) => {
        setMobileNumber(event.target.value)
    }


   const Navigate = useNavigate()
   
   const onSignUp = async (event) => {
      event.preventDefault()
      if (email !== "" && MobileNumber !== "" && Password !== "" && fullName !== ""){
        console.log("Started")
        // setLoading(true)
        // const apiUrl = "https://karyakartha1.onrender.com/signup"
        // const userData = {
        //     username:fullName,
        //     password:Password,
        //     mobileNumber:MobileNumber,
        //     email:email
        // }
        // const options = {
        //     method:"POST",
        //     body: JSON.stringify(userData)
        // }
        // const result = await fetch(apiUrl,options)
        // console.log(result)
        // const resutData = await result.json()
        // console.log(resutData)
        // setLoading(false)
        alert("Signup Successfull. Please Login... :)")
        Navigate("/login")
      }else{
        alert("Please fill all mentioned Details")
      }
   }

   
    return (
        <div className='desktop-bg-container'>
        <div className='popup-desktop-view'>
        <div className='close-button-container'>
                  <button className='close-button' > &times; </button>
                </div>
            <div className='form-google-container-desktop-view'>
              <div className='form-container'>
                <p className='signup-des'> 
                    <span className='sign-up'> Sign Up </span>get your dream job & excel in career
                </p>
                {isLoading && <p>Loading....</p>}
                <form onSubmit={onSignUp} className='sign-up-form'>
                    <div className='inputs-container'>
                        <div className='input-container'>
                            <label className='label' htmlFor='name'>Full Name</label>
                            <input className='input' value={fullName} type='text' id='name' placeholder='  What is your name?' onChange={changeFullName}/>
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='email'>Email ID</label>
                            <div className='email-container'>
                                <input className='input' value={email} type='text' id='email' placeholder='  Enter your Email ID' onChange={changeEmail}/>
                                <p className='tagline'>We'll send you job notifications</p>
                            </div>
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='password'>Password</label>
                            <div className='password-container'>
                            <input className='input' value={Password} type='text' id='password' placeholder='  Create your password here' onChange={changePassword}/>
                            <p className='tagline'>Minimum 6 characters required</p>
                            </div>
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='mobile-no'>Mobile No</label>
                            <input className='input' value={MobileNumber} type='text' id='mobile-no' placeholder='+91 Mobile number' onChange={changeMobileNumber}/>
                        </div>


                        <p className='t-and-c'>
                            By Clicking Sign Up, you agree to  the  
                            <a href='https://www.writerbay.com/apply.html'>
                                Terms and Conditions & Privacy Policy
                            </a> of Karyakartha 
                        </p>

                        <button type='submit' className='sign-up-button'>Sign Up</button>

                    </div>
                </form>
                </div>
                <div className='desktop-line-google-container'>

                    <div className='desktop-line-container'>                       
                        <div className='v-line'></div>
                        <p className='or'>Or</p>
                        <div className='v-line'></div>
                    </div>

                    <div className='continue-with-container'>
                        <p className='continue-with'>Continue with</p>
                        <div>
                            <button className='desktop-google-button'>
                            <div className='icon-container'>
                                <FcGoogle className='FcGoogle'/>
                                <a href="https://www.writerbay.com/apply.html" className='google-anchor'> Google </a> 
                             </div>    
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        </div>
    )
}

const RenderMobileView = () => {

   const Navigate = useNavigate()
    const onSignUp = (event) => {
        event.preventDefault()
        const res = window.confirm("User Registered Successfully..!")
        if (res){
            Navigate("/login")
        }
    }

    return (
        <div className='mobile-bg-container'>
        <div className='popup-mobile-view'>
            <div className='form-google-container-mobile-view'>
                <div className='m-close-button-container'>
                  <button className='m-close-button' > &times; </button>
                </div>
                <div className='mobile-form-container'>
            <h1 className='mobile-view-heading'>Create Account</h1>
                <form onSubmit={onSignUp} className='m-sign-up-form'>
                    <div className='m-inputs-container'>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-name'>Full Name</label>
                        <input className='m-input' type='text' id='m-name' placeholder='Enter your name' />
                    </div>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-email'>Email ID</label>
                        <input className='m-input' type='text' id='m-email' placeholder='Enter your mail..' />   
                    </div>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-password'>Password</label>     
                        <input className='m-input' type='text' id='m-password' placeholder='Enter password' />  
                    </div>
                    <div className='m-input-container'>
                        <label htmlFor='mobile-no' className='m-label'>Mobile Number</label>
                        <input className='m-input' type='text' id='mobile-no' placeholder='Mobile number' />
                    </div>
                    </div>
                    <button type='submit' className='btn m-sign-up-button'>Sign Up</button>
                </form>
                <div className='mobile-line-button-container'>
                    <div className='mobile-line-container'>
                        <div className='h-line' ></div>
                        <p className='or'> Or </p>
                        <div className='h-line' ></div>
                    </div>
                        <button className='m-g-btn m-google-button'>
                                <div className='icon-container'>
                                <FcGoogle className='FcGoogle' />
                                <a href="https://www.writerbay.com/apply.html" className='google-anchor'> Continue with Google </a>
                               </div>
                        </button>         
                </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

const SignUp=()=>(
    <>
    {RenderDesktopView()}
    {RenderMobileView()}
    </>
)

export default SignUp