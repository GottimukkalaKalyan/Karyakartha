import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";

import "./footer.css"

const FooterComponent = () => {
   return(
      <div className="wwo-footer-container">
         <div className="footer-items-container">
            <div className="footer-1">
               <img src="https://res.cloudinary.com/dtnhhgwlo/image/upload/v1700058243/LogoBlue_jiqxz3.png" alt="footer logo image" />
               <p>Stay Connect with us !</p>
            </div>
            <ul className="footer-2">
               <h3>Explore</h3>
               <li>Home</li>
               <li>About</li>
               <li>Find Job</li>
               <li>Subscription</li>
            </ul>
            <ul className="footer-3">
               <h3>Visit</h3>
               <li>A1 Block, East Street</li>
               <li>34 Tesla Site 100</li>
               <li>Invention AP 55033</li>
            </ul>
            <ul className="footer-4">
               <h3>Follow</h3>
               <li className="follow-item-container">
                  <RiInstagramFill className="follow-icons"/>
                  <p>Instagram</p>
               </li>
               <li className="follow-item-container">
                  <BsLinkedin className="follow-icons"/>
                  <p className="ml-1">Linkedin</p>
               </li>
               <li className="follow-item-container">
                  <IoLogoWhatsapp className="follow-icons"/>
                  <p>Whatsapp</p>
               </li>
               <li className="follow-item-container">
                  <ImFacebook2 className="follow-icons"/>
                  <p className="ml-1">Facebook</p>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default FooterComponent 