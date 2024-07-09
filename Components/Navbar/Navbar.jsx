/* --- type rafce for code snippet ---*/
import React, { useEffect, useState } from 'react'
import './Navbar.css'// import css file 
import logo from '../../assets/logo.png'// import logo from asset folder before use 
import { Link } from 'react-scroll' // used to link all components 
import menu_icon from '../../assets/menu-icon.png' // import image from asset folder before use 

const Navbar = () => {

  const[sticky, setSticky]= useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 500 ? setSticky(true):setSticky(false)
          })
  },[]);


  const[mobileMenu, setMobileMenu] =useState(false);
  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);


  }
  return (
    /* Creating navbar we are using nav tag here instead of div */
    /* used ul list to adding items in navbar */
    /* install react-scroll to link all the components to navbar give link tag and provide class name in to=''*/ 
    /*logo class is used for logo img to give css */
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src= {logo} alt="" className='logo' /> 
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='doctor' smooth={true} offset={-260} duration={500}>Doctors</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon'onClick={toggleMenu}/>
    </nav>
      
    
  )
  
}

export default Navbar
