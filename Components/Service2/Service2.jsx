import React from 'react'
import './Service2.css'

import ward_image2 from './../../assets/ward.jpg'

const Service2 = () => {
  return (
    <div className='ser2'>
        <div className="about-left">
            
            <img src={ward_image2} alt="" className='ser2-img'/>
        </div>
        <div className="about-right">
            <h3>Ward Services</h3>
            <h2>Your Health, Our Priority</h2>
            <p>Comprehensive Inpatient Care
At [Hospital Name], we offer a range of inpatient care services across various specialized wards to meet the diverse healthcare needs of our patients.

<ol>
    <li><b>Inpatient Care:</b></li>

<ul><li><b>Medical and Surgical Wards:</b> Our hospital provides dedicated wards for medical and surgical care, ensuring that patients receive specialized treatment tailored to their condition.</li>
<li><b>Specialized Wards:</b> We have specialized wards including Maternity, Pediatric, Oncology, Cardiology, and Intensive Care Units (ICUs) to cater to specific health requirements.</li></ul>
<li><b> Admission and Discharge Processes:</b></li>

<ul><li><b>Admission: </b>Our admission process is streamlined for efficiency, requiring minimal documentation and quick initial assessments to get patients settled comfortably.</li>
<li><b>Discharge:</b> We ensure a smooth discharge process with comprehensive post-discharge care instructions and follow-up appointments to aid in recovery.</li></ul>
<li><b> Patient Accommodations:</b></li>

<ul><li><b>Room Options:</b> Choose from private, semi-private, and shared rooms, all equipped with essential amenities such as Wi-Fi, television, and comfortable furnishings.</li>
<li><b>Amenities:</b> Enjoy high-quality meals, daily housekeeping, and other conveniences designed to make your stay as pleasant as possible.</li></ul>
<li><b> Nursing Care:</b></li>

<ul><li><b>Dedicated Nursing Team:</b> Our skilled nursing staff provides 24/7 care, monitoring patients continuously and addressing any needs promptly.</li></ul>
<li><b>Medical Services: </b></li>

<ul><li><b>Routine Care:</b> We perform regular medical checks, administer medications, and provide necessary treatments to ensure patient well-being.</li>
<li><b>Specialist Consultations:</b> Access to a wide range of specialists is available for consultations and advanced medical care.</li></ul>
<li><b> Support Services:</b></li>

<ul><li><b>Physiotherapy and Rehabilitation:</b> Our in-house physiotherapy team offers personalized rehabilitation programs to aid recovery.</li>
<li><b>Dietary and Nutritional Support:</b> Our nutritionists plan meals tailored to each patient's dietary needs, ensuring proper nutrition.</li></ul>
</ol></p>

        </div>
      
    </div>
  )
}

export default Service2
