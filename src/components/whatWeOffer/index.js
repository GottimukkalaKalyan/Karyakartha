import React,{useState} from "react"
import Header from "../header"
// import {GiHeavyCollar} from 'react-icons/gi'
import {HiOutlineMail} from 'react-icons/hi'
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

import './index.css'
import FooterComponent from "../footer/footer";


const WhatWeOffer = () => {
    const [email,setEmail] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onSubmitEmail = (event) => {
        event.preventDefault();
        alert(`${email} Mail sended Successfully`)
        setEmail("")

    }

    return (
        <div>
            <Header/>
            <div className="wwo-home-container pt-5">
                <div className="wwo-home-top-container">
                    <h2>Welcome to</h2>
                    <img className="wwo-home-page-logo" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699870907/karyakartha-blue-logo_wg6sqp.png" alt="wwo home logo image" />
                    <p className="mt-3">
                        Subscribe at just <span className="span-rupee">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-currency-rupee mb-1" viewBox="0 0 16 16">
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                        </svg>
                        9</span> to get all at once
                    </p>
                </div>

                <ul className="wwo-home-ul-container">
                    <Link to="/full-time-jobs" className="link-tag">
                        <li className="job-type-card m-3">
                              <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1700122744/fulltimeicon_k8lpzf.png" alt="Full Time jobs Img" />
                              <p>Full Time Jobs</p>
                        </li>
                    </Link>
                    <Link to="/full-time-jobs" className="link-tag">
                        <li className="job-type-card m-3 ">
                            <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1700122766/ParttimeJobsicon_lkc9si.png" alt="Part Time jobs Img" />
                            <p>Part Time Jobs</p>
                        </li>
                    </Link>
                    <Link to="/full-time-jobs" className="link-tag">
                        <li className="job-type-card m-3 ">
                            <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1700122795/Internshipsicon_tehofa.png" alt="Internships Img" />
                            <p>Internships</p>
                        </li>
                    </Link>
                    <Link to="/full-time-jobs" className="link-tag">
                        <li className="job-type-card m-3 ">
                            <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1700122887/stipendicon_ahmtjo.png" alt="Stipend Internships Img" />
                            <p>Stipend Internships</p>
                        </li>
                    </Link>
                    <Link to="/full-time-jobs" className="link-tag">
                        <li className="job-type-card m-3 ">
                            <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1700122906/Felloshipsicon_jcuwai.png" alt="FellowShips Img" />
                            <p>FellowShips</p>
                        </li>
                    </Link>
                    <Link to="/full-time-jobs" className="link-tag">
                        <li className="job-type-card m-3">
                            <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1700123301/GovtJobsicon_jnml6z.png" alt="Govt jobs Img" />
                            <p>Govt Jobs</p>
                        </li>
                    </Link>
                </ul>

                <div className="main-wwo-about-container">
                    <div className="about-top">
                        <h3>ABOUT</h3>
                        <hr/>
                    </div>
                    <div className="wwo-about-container">
                        <div className="about-description-container">
                            <h2>Welcome to Karyakartha - Your gateway to career success</h2>
                            <br/>
                            <p className="about-paras">
                                At Karyakartha, we believe in connecting talent with opportunity, shaping careers, and 
                                fostering professional growth. Our job portal is designed to be your one-stop 
                                destination for unlocking a world of possibilities in the professional landscape. Whether 
                                you're a seasoned professional looking for new challenges or a fresh graduate eager to 
                                embark on your career journey, we have something for everyone.
                            </p>
                            <br/>
                            <div className="about-why-choose-us-lis">
                                <h2>Why Choose Karyakartha?</h2>
                                <li>Diverse Opportunities</li>
                                <li >User-Friendly Interface</li>
                                <li>Customized Job Matches</li>
                                <li>Career Resources and Guidance</li>
                                <li>Real-time Notifications</li>
                            </div>
                            <div className="join-karyakarta-container">
                                <h2>Join Karyakartha, Today and Take the Next Step in Your Career!</h2>
                                <p>
                                    Your dream job is just a click away. Register with [Company Name] and embark on a 
                                    journey of professional growth, unparalleled opportunities, and a community that 
                                    supports your success. Let's shape your future together!
                                </p>
                            </div>

                            <div className="karyakarta-quote">
                                <span>"</span> Karyakartha - Connecting Talent with Opportunity. <span>"</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="main-wwo-contact-container">
                    <div className="about-top">
                        <h3>CONTACT</h3>
                        <hr/>
                    </div>
                    <div className="wwo-contact-container">
                        <form onSubmit={onSubmitEmail}>
                            <HiOutlineMail size={35} className="email-icon"/>
                            <input type="mail" placeholder="Email Your Queries" value={email} onChange={onChangeEmail} className="input-field"/>
                            <button type="submit">SEND</button>
                        </form>
                    </div>
                </div>
                <FooterComponent />
            </div>
        </div>
    )
}

export default WhatWeOffer;