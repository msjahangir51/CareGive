import React from 'react'
import "../assets/css/Fotter.css"
import { Link, NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
            <d  iv className='tittle'>
                <h1>Care<span>Give</span></h1>
                <p>Providing Compassionate Care, One Heart at a Time</p>
                <div className='social'>
                    <Link to="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link to="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
                </div>

            </d>
                <div className="link">
                    <p>Quick links</p>
                    <NavLink to="/" className={({isActive})=>isActive? "active" : ""}>Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
            <div className='contact'>
                <div className='phone'>
                    <i className="fa-solid fa-phone"></i> <span>(+254) 123 456 789</span>
                    </div>
                    <div className="location">
                    <i className="fa fa-location-pin" aria-hidden="true"></i><span>Dhaka/Bangladesh</span>
                    </div>
                    <div className="mail">
                    <i className="fa fa-envelope" aria-hidden="true"></i><span>support@domain.com</span>
                    </div>

            </div>

            <div className="copyright">
                <p>Copyright © 2023 – All rights reserved</p>
            </div>
    </div>
  )
}

export default Footer