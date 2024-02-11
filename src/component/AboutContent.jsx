import React from 'react';;



import "../assets/css/AboutItem.css";
import aboutusIMG from "../assets/images/Rectangle 3.png";

function AboutContent() {
  return (
    <div className='about'>
        <div className="imagediv">
            <img src={aboutusIMG} alt='About us Image'/>
        </div>

        <div className="textContent">
            <h1>About Us</h1>
            <p>
            Meet the Heart and Soul <br/>of Compassion Haven
            </p>

            <ul>
                <li className='active'>Approach</li>
                <li>Mission</li>
                <li>Target</li>
            </ul>
            <p>At [Your Caregiver Service Name], we approach caregiving with a deeply personalized touch, striving to understand each individual's unique needs, preferences, and life story, because we believe that the most meaningful care is one that honors the individuality and dignity of every senior we serve."</p>
        </div>
    </div>
  )
}

export default AboutContent