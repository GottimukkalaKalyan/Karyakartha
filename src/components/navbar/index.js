import React, {useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import {RiMenu3Fill} from "react-icons/ri"
import {FcGoogle} from 'react-icons/fc'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import './index.css';

// After login use this

const Navbar = ({ isLoggedIn }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  

  return ( 
    <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 nav-bar-container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </a>
          <button class=" hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Jobs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;