import React from "react";
import "../assets/css/Navtop.css";
import { Link } from "react-router-dom";

function Navtop (){
    return (
        <>fd
          <div className="navtop">
            <div className="contact">
            <div className="mail">
                    <i className="fa fa-envelope"></i><span>support@domain.com</span>
                    </div>
                </div>  
        <div className="social"><span>Follow Now:</span>
        <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
        <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
        <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
        </div>
          </div>  

        </>
    )
}

export default Navtop;