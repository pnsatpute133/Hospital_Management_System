/* --- type rafce for code snippet ---*/
import React, { useRef } from 'react'
import './Testimonials.css'/* import css file */
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
const slideForward =()=>{
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;

}
const slideBackward=()=>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;
    
}



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick=
        {slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick=
        {slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Emma Johnson </h3>
                                 <span> New York City, NY</span>
                            </div>
                        </div>
                        <p>"I cannot express how grateful I am for the incredible care I received at your hospital. The entire team, from the doctors to the nurses, was compassionate and professional. They made me feel comfortable and safe during my treatment. I highly recommend this hospital to anyone in need of excellent medical care." - Emma Johnson</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Lucas Hernandez </h3>
                                 <span>Los Angeles, CA</span>
                            </div>
                        </div>
                        <p>"My experience at your hospital was exceptional. The staff went above and beyond to ensure I was well taken care of. The facilities were clean, and the medical team was knowledgeable and attentive. I truly appreciate the high standard of care provided here. Thank you for everything!" - Lucas Hernandez</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Sophia Lee</h3>
                                 <span>Chicago, IL </span>
                            </div>
                        </div>
                        <p>"I was very nervous about my surgery, but the staff at your hospital made me feel at ease from the moment I arrived. Their kindness and professionalism were evident in every interaction. I felt confident in the care I received, and my recovery has been smooth. I'm so thankful for the excellent service provided." - Sophia Lee</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Ethan Patel </h3>
                                 <span>Houston, TX</span>
                            </div>
                        </div>
                        <p>"Visiting your hospital was a great experience. The medical team was incredibly skilled and made sure I understood every aspect of my treatment. The level of care and attention to detail was outstanding. I felt supported throughout my entire stay. I would highly recommend this hospital to anyone in need of medical care." - Ethan Patel</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
