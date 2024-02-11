import React from 'react'
import Navtop from '../component/Navtop';
import Navbar from '../component/Navbar';
import ModelImage from '../component/Model';
import Footer from '../component/Footer';
function Home() {
  return (
    <div>
        <Navtop/>
        <Navbar/>
        <ModelImage/>
        <Footer/>
    </div>
  )
}

export default Home