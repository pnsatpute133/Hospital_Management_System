import React from 'react'
import './Service3.css'
import icu_img from './../../assets/ICU-img.jpg'

const Service3 = () => {
  return (
    <div className='ser3'>
    <div className="about-left">
        <img src={icu_img} alt="" className='ser3-img'/>
    </div>
    <div className="about-right">
        <h3>Intensive Care Unit(ICU)</h3>
        <h2>Your Health, Our Priority</h2>
        <p>At WellNessHub, our Intensive Care Unit (ICU) is dedicated to providing the highest level of medical care and monitoring for critically ill patients. Our ICU is equipped with advanced technology and staffed by a skilled multidisciplinary team to ensure optimal patient outcomes.</p>
        <p><ol>
<li><b> State-of-the-Art Facilities:</b></li>

<ul><li><b>Advanced Monitoring Systems:</b>  Our ICU is equipped with the latest monitoring technology to continuously assess vital signs and other critical parameters.</li>
<li><b>Specialized Equipment:</b>  We use advanced medical equipment, including ventilators, infusion pumps, and dialysis machines, to support various critical care needs.</li></ul>

<li><b> Highly Skilled Medical Team:</b></li>

<ul><li><b>Intensivists:</b> Our ICU is staffed by board-certified intensivists who specialize in critical care medicine.</li>
<li><b>Nursing Staff:</b> Experienced ICU nurses provide round-the-clock care, ensuring close monitoring and immediate response to any changes in patient conditions.</li>
<li><b>Multidisciplinary Team:</b> Our team includes respiratory therapists, physiotherapists, pharmacists, and nutritionists who work together to provide comprehensive care.</li></ul>

<li><b>Patient-Centered Care:</b></li>

<ul><li><b>Individualized Treatment Plans:</b> Each patient receives a personalized care plan tailored to their specific medical needs.</li>
<li><b>Family Involvement:</b> We encourage family involvement in the care process, providing regular updates and involving them in decision-making.</li></ul>

<li><b> Specialized Services:</b></li>
<ul><li><b>Cardiac Intensive Care:</b>Dedicated care for patients with severe cardiac conditions, including post-surgery recovery.</li></ul>

</ol></p>
        

    </div>
  
</div>
  )
}

export default Service3
