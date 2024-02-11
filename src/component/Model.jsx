import React from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import HeroImg from "../assets/images/Rectangle 1.png";
import "../assets/css/Model.css";         
function ModelImage() {
  return (
    <div className='ModelImage'>
        <div>
            <h1>Welcome to CareGive Where Compassion Meets Care</h1>
            <p>Our team of experienced and highly-trained caregivers is committed to ensuring the physical, emotional, and social well-being of each individual under our care. We offer a range of personalized services tailored to meet the unique needs of our clients.</p>

            <Link to="/Booking">Book Appointment</Link>
        </div>
        <div>
            <img src={HeroImg} alt="Hero Image" />
        </div>

        <div className="exparence">
            <div>
                <h1 className='count1'><CountUp start={0} end={25} duration={2}/>+</h1>
                <p>
                    Years<br/>
                    Experiences
                </p>
            </div>
            <div>
                <h1 className='count2'><CountUp start={0} end={750} duration={5}/>+</h1>
                <p>
                    Great<br/>
                    Volunteers
                </p>
            </div>
            <div>
                <h1 className='count3'><CountUp start={0} end={20} duration={4}/>k+</h1>
                <p>
                Satisfied<br/>
                Customers
                </p>
            </div>
            <div>
                <h1 className='count4'><CountUp start={0} end={10} duration={2}/></h1>
                <p>
                Awards<br/>
                Achived
                </p>
            </div>
        </div>
    </div>
  )
}

export default ModelImage;