import React from 'react'
import './Service1.css'
import opd_img from '../../assets/opd-img.png'

const Service1 = () => {
  return (
    <div className='ser1'>
        <div className="about-left">
            <img src={opd_img} alt="" className='ser1-img'/>
        </div>
        <div className="about-right">
            <h3>Outpitent Department(OPD)</h3>
            <h2>Your Health, Our Priority</h2>
            <p>The Outpatient Department (OPD) is the primary point of contact for patients visiting the hospital for consultations, diagnostics, and treatment without requiring an overnight stay. It serves as a crucial component of our healthcare services, providing accessible and efficient care to the community.</p>
            <p><ul><b>Services Offered:</b>

<li>Consultations: General and specialized consultations with experienced physicians and specialists.</li>
<li>Diagnostics: Comprehensive diagnostic services including lab tests, imaging, and other investigations.</li>
<li>Minor Procedures: Performance of minor surgical and medical procedures.</li>
<li>Follow-Up Care: Regular follow-up appointments for ongoing treatment and health monitoring.</li>
<li>Health Education: Patient education and counseling on various health conditions and preventive measures.</li></ul></p>
            <p><ul><b>Operational Hours:</b>

<li>Monday to Friday: 8:00 AM - 6:00 PM</li>
<li>Saturday: 8:00 AM - 2:00 PM</li>
<li>Sunday: Closed (Emergency services available 24/7)</li></ul></p>

        </div>
      
    </div>
  )
}

  
export default Service1 

