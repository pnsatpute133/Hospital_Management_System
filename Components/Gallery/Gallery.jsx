/* --- type rafce for code snippet ---*/
import React from 'react'
import './Gallery.css'/* import css file */
import G_1 from '../../assets/G1.jpg'
import G_2 from '../../assets/G2.jpg'
import G_3 from '../../assets/G3.jpg'
import { Link } from 'react-scroll'
import white_arrow from '../../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="photos">
      <img src={G_1} alt="" />
      <img src={G_2} alt="" />
      <img src={G_3} alt="" />
      </div>
      <Link to='seemore'smooth={true} offset={-260} duration={500}>
      <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button></Link>
          
    </div>
  )
}

export default Gallery
