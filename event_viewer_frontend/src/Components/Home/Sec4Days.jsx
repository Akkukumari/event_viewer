import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import img from "../Assests/Images/virtual-conference-37.png";
import { Link as RouterLink } from "react-router-dom";
import "./Sec4Days.css";

export default function SecondFooter() {
  return (
    <div class="container-box-second-footer">
    <div class="footer-row">
      <div class="footer-column footer-column-1">
        <div class="col1">
            Register <br></br>today
        </div>
        <div class="col2">Follow</div>
        <div className="col3">
        <RouterLink to="/"><icon  ><FaInstagramSquare /></icon></RouterLink>
            <RouterLink to="/">  <icon ><FaXTwitter /></icon></RouterLink>
            <RouterLink to="/"> <icon><FaFacebookSquare /></icon></RouterLink>
            <RouterLink to="/"> <icon><FaYoutube /></icon></RouterLink>

        </div>
      </div>
      <div class="footer-column footer-column-2">
       
        <div className='column-2-row-1'>
          <div className='column-2-row-1-col-1'>Join our <br></br>newsLetter</div>
          <div className='column-2-row-1-col-2'><img src="https://youngresearchers.es/wp-content/uploads/2022/05/virtual-conference-37.png" alt="" /></div>
        </div>
        <div className='column-2-row-2'>
        <form className='column-2-row-2-form'>
          {/* <label> */}
            <input type="email"  name="name" placeholder="Email" style={{marginBottom:'2%'}}/>
          {/* </label> */}
          <button type="submit" value="Subscribe">Subscribe</button>
        </form>
        </div>
        </div>
    </div>
  </div> 
  )
}