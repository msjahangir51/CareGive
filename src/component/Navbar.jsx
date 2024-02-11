import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import "../assets/css/navbar.css"

function Navbar() {
  let [nav,setNav] = useState(false)
  return (
    <div className='navbar'>
        <div className="logo">Care<span>Give</span></div>
        <ul className={nav ? "navbar" :"active"}>
            <button className='closebutton' onClick={()=> setNav(!nav)}><AiOutlineClose size={20}/></button>
            <li><NavLink to="/" className={({isActive})=> isActive? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=>  isActive? "active" :""}>About</NavLink></li>
            <li><NavLink to="/contact" className={({isActive})=>  isActive? "active" :""}>Contact</NavLink></li>
        </ul>

        <div className={nav ?'overlay' :""}></div>
        <button className='menu-btn' onClick={()=> setNav(!nav)}><AiOutlineMenu size={20}/></button>
    </div>
  )
}

export default Navbar;