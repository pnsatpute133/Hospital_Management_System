/* --- type rafce for code snippet ---*/
import React from 'react'
import './Services.css'/* import css file */
import ser1 from '../../assets/ser-1.jpeg'
import ser2 from '../../assets/ser-2.jpg'
import ser3 from '../../assets/ser-3.jpg'
import ser4 from '../../assets/ser-4.jpeg'
import ser_icon_1 from '../../assets/ser-icon-1.png'
import ser_icon_2 from '../../assets/ser-icon-2.png'
import ser_icon_3 from '../../assets/ser-icon-3.png'
import ser_icon_4 from '../../assets/ser-icon-4.png'
import { Link } from 'react-scroll' // used to give links

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <Link to='ser1'smooth={true} offset={-160} duration={500}>
            <img src={ser1} alt="" />
            <div className="caption">
                <img src={ser_icon_1} alt="" />
                <p>Outpatient Department(OPD)</p>
            </div>
            </Link>
        </div>

        <div className="service">
            <Link to='ser2'smooth={true} offset={-160} duration={500}>
            <img src={ser2} alt="" />
            <div className="caption">
                <img src={ser_icon_2} alt="" />
                <p>Ward</p>
            </div>
            </Link>
        </div>
        <div className="service">
            <Link to='ser3'smooth={true} offset={-160} duration={500}>
            <img src={ser3} alt="" />
            <div className="caption">
                <img src={ser_icon_3} alt="" />
                <p>Intensive Care Unit(ICU)</p>
            </div>
            </Link>
        </div>
        <div className="service">
            <Link to='ser4'smooth={true} offset={-160} duration={500}>
            <img src={ser4} alt="" />
            <div className="caption">
                <img src={ser_icon_4} alt="" />
                <p>Pharmacy & Diagnosis</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Services
