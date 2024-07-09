/* --- type rafce for code snippet ---*/
import React from 'react'
import './Hero.css'/* import css file */
import dark_arrow from '../../assets/dark-arrow.png'/* import arrow icon from assets folder*/

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Your Partner in Health and Wellness</h1>
            <p>We are committed to providing you with the best medical and healthcare services to help you live healthier and happier</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
