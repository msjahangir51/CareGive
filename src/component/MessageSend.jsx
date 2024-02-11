import React from 'react'
import "../assets/css/Message.css";


import {AiOutlineClose} from 'react-icons/ai';

import HeroImg from "../assets/images/check.png";

function MessageSend() {
  return (
    <div>
        <div className='sucsess'>
            <img src={HeroImg} className='check'/>
            <h1>Sucsess</h1>
            <AiOutlineClose className="btn"/>
        </div>
    </div>
  )
}

export default MessageSend