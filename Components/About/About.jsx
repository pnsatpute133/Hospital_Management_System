/* --- type rafce for code snippet ---*/
import React from 'react'
import './About.css'/* import css file */
import about_img from '../../assets/about.avif'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About Hospital</h3>
            <h2>Your Health, Our Priority</h2>
            <p>Welcome to our Hospital Management System, a cutting-edge solution designed to revolutionize healthcare administration. Our system is tailored to streamline hospital operations, ensuring efficiency and accuracy in managing patient information, scheduling, billing, and more. With a commitment to innovation and quality, we empower healthcare providers to focus on what matters most – delivering exceptional patient care.</p>
            <p>Our team consists of experts in healthcare technology and software development, dedicated to creating intuitive and reliable tools for the medical community. By integrating advanced features such as electronic health records (EHR), telemedicine capabilities, and comprehensive reporting, our platform supports hospitals in optimizing their workflows and improving patient outcomes. We understand the unique challenges faced by healthcare professionals and are here to provide robust, scalable solutions.</p>
            <p>At the heart of our mission is a passion for enhancing the healthcare experience for both providers and patients. We believe in the power of technology to transform the way hospitals operate, making healthcare more accessible, efficient, and patient-centered. Our Hospital Management System is not just a product but a partnership with healthcare institutions, striving together to achieve excellence in medical care and administration.</p>

        </div>
      
    </div>
  )
}

export default About
