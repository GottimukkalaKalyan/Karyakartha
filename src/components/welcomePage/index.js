import { useState } from "react";
import React, {useNavigate} from "react-router-dom"
import {HiArrowLongRight} from 'react-icons/hi2'

import "./index.css"
import Header from "../header";
import Navbar from "../navbar";

const Welcome = () => {
    const navigate = useNavigate();
    const {showAlert, setShowAleret} = useState(true)

    const handleNextClick = () => {
        navigate('/login');
    };

    

    const renderWelcomeDesktopView = () => {
        return(
            <>
            <Header />
            <div className="d-welcome-container">
                <div className="top-image-container">
                    <img className="top-image" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699466062/welcome-big-vector_gnfpjw.png" alt="desktop logo image"/>
                </div>
                <div className="d-content-container">
                    <h1> Welcome to </h1>
                    <img className="desktop-logo-img" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699470424/karyakartha-high-resolution-logo-transparent_3_bqen3w.png" alt="desktop logo image"/>
                    <p className="alert alert-danger"><b>Dear Visitors,</b><br /> Thank you for your interest in our Karyakartha application currently under development.<br /> We appreciate your patience as we work diligently to create a seamless and feature-rich <br /> experience for you. Our team is committed to delivering a high-quality product that meets <br />your expectations and needs.Please check back for updates on our progress, and feel free<br /> to reach out if you have any specific inquiries. Thank you for your understanding and support.<br /><b>Best regards,</b><br /> <b>Karyakartha Development Team,</b></p>
                </div>
                <div className="bottom-image-container">
                    <img className="top-image" src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699466062/welcome-big-vector_gnfpjw.png" alt="desktop logo image"/>
                </div>
            </div>
            </>
        )
    }

    return(
        <div className="Welcome-container">
            {renderWelcomeDesktopView()}
        </div>
    )
}

export default Welcome;