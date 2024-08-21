import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import ErrorImg from '../assets/error-removebg.png'
function Error() {

  return (
    <>
    <Navbar/>
     <div className="error-page">
        <div className="error-img-con">            
            <img src={ErrorImg} alt="" />
        </div>
        <h1> We're Sorry, the page you are looking for isn't available.</h1>
        {/* <p> Please use the button below find what you are looking for or go back home</p> */}
        <p> Please use the button below to go back home</p>

        <div className="bac-btn-con">
        {/* <Link to={'/'} className="back-btn">Discover</Link> */}
        <Link to={'/'} className="back-btn">Back home</Link>

        </div>        
      </div>

      <Footer/>
    </>
  );
}

export default Error;
