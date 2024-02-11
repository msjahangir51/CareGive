import React,{useRef, useState} from 'react';


import Navbar from '../component/Navbar';
import Navtop from '../component/Navtop';
import Footer from '../component/Footer';

import "../assets/css/contact.css"

import emailjs from '@emailjs/browser';
// message section 
import "../assets/css/Message.css";
import {AiOutlineClose} from 'react-icons/ai';
import HeroImg from "../assets/images/check.png";
// import Bokking from './Bokking';
// message section 


function Bokking() {
  const form = useRef();
  let [nav, setNav] = useState(!false);

    const sendEmail = (e)=>{
      e.preventDefault();

      emailjs
      .sendForm('service_998rg3r', 'template_m1g3whb', form.current, {
        publicKey: 'vHvgJ-jM15VWYdrJh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setNav(!nav)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  setTimeout(() => {
    setNav(!false)
  }, 10000)
  return (
    <div>
      {/* nonw  */}
        <Navtop/>
        <Navbar/>
        <div className='contactSection'>
        {/* Message section  */}
        <div>


          <div className={nav ? 'sucsess' : 'sucsess active'}>
            <img src={HeroImg} className='check'/>
            <h1>Sucsess</h1>
            <AiOutlineClose onClick={()=> setNav(!nav)} className="btn"/>
          </div>
        </div>
        {/* end ofMessage section  */}

            <h1><span>Book</span> Appointment</h1>
            <p>We Would Love to hear from you</p>
            <form onSubmit={sendEmail} ref={form}>
      <input type="text" name="user_name" placeholder='Enter Your Full Name' required/>
      <input type="email" name="user_email" placeholder='Enter Your Email Address' required />
      <label>Booking Detalis</label>
      <textarea name="message" placeholder='Enter Your Details' required/>
      <input type="submit"  className='SubmitBTN' value="Send" />
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Bokking;