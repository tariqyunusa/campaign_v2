import React from 'react'
import "../styles/Footer.css"
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
   <div className="redunat_2">
     <div className='footer__wrapper'>
        <h1 className='footer__headline' data-animation = "header">Campaign</h1>
        <div className="footer__links_wrapper">
          <div className="footer_copyright"  data-animation = "paragraph">&#169; Campaign All rights reserved 2024</div>
          <div className="footer_copyright__links" data-animation = "paragraph"><FiInstagram /> <FiTwitter /></div>
        </div>
    </div>
   </div>
  )
}

export default Footer
