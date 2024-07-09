import React from 'react'
import './SeeMore.css'/* import css file */
import G_1 from '../../assets/G1.jpg'
import G_2 from '../../assets/G2.jpg'
import G_3 from '../../assets/G3.jpg'
import G_4 from '../../assets/G4.jpg'
import G_5 from '../../assets/G5.jpg'
import G_6 from '../../assets/G6.webp'
import G_7 from '../../assets/G7.jpg'
import G_8 from '../../assets/G8.jpg'
import G_9 from '../../assets/G9.jpg'
import G_10 from '../../assets/G10.jpg'
import G_11 from '../../assets/G11.webp'
import G_12 from '../../assets/G12.jpg'

const SeeMore = () => {
  return (
      <div className='seemore'>
      <div className="photos">
      <img src={G_1} alt="" />
      <img src={G_2} alt="" />
      <img src={G_3} alt="" />
      </div>

      <div className="photos">
      <img src={G_4} alt="" />
      <img src={G_5} alt="" />
      <img src={G_6} alt="" />
      </div>
      <div className="photos">
      <img src={G_7} alt="" />
      <img src={G_8} alt="" />
      <img src={G_9} alt="" />
      
      </div>
      <div className="photos">
      <img src={G_10} alt="" />
      <img src={G_11} alt="" />
      <img src={G_12} alt="" />
      </div>
      
    </div>
  )
}

export default SeeMore
