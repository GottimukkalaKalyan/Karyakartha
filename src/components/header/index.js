import React, {useState} from "react"
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import "reactjs-popup/dist/index.css";
import './index.css';

// Before login

const Header = ({ isLoggedIn }) => {
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

  const headerDesktopView = () => {
    return(
      <div className="d-none d-lg-block">
        <div className="header-desktop">
          <div className="logo">
            <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1699167233/karyakartha_logo_houqn9.jpg" alt="LOGO OF KARYAKARTA" className='logo_image'/>
          </div>
        {!isLoggedIn && (
          <div className="login-text">
              <button type="button" className="desk-login-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Already Registered? <span className="login">&nbsp; Login &nbsp;</span> here
              </button>  
          </div>
        )}
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="popup-form-container">
                      <button type="button" onClick={handleLogin} className="btn btn-primary w-50 mb-4 popup-buttons" data-bs-dismiss="modal">
                        Login
                      </button>
                      <button type="button" onClick={handleCreateAccount} className="btn btn-primary w-50 mb-2 popup-buttons" data-bs-dismiss="modal">
                        Create Account
                      </button>
                      <div className="or-container">
                        <hr className="horizontal-line"/>
                        <span className="p-0">Or</span>
                        <hr className="horizontal-line"/>
                      </div>
                      <div className="continue-container">
                        <h4 className="mt-2 mb-3 p-0">Continue with</h4>
                        <button className="google-button-container">
                            <FcGoogle size={26}/>
                            <p className="p-0 m-0 google-para">Google</p>
                        </button>
                      </div>
                  </div>
                </div>
            </div>
          </div> m-0
        </div>
      </div>
    )
  }

  const headerMobileView = () => {
    return(
          <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 d-lg-none">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </a>
              <button className="hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="button-card">
                  {
                  !isLoggedIn && 
                  (
                    <div className="login-button-container">
                        <button type="button" className="login-tag" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          Login
                        </button>
                    </div>
                  )
                  }
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )
  }

  return ( 
    <>
      {headerDesktopView()}
      {headerMobileView()}
    </>
  );
};

export default Header;