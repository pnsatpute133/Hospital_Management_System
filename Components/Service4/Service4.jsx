import React from 'react'
import './Service4.css'
import Phar_img from './../../assets/Phar-img.jpg'


const Service4 = () => {
  return (
    <div className='ser4'>
    <div className="about-left">
        <img src={Phar_img} alt="" className='ser4-img'/>
    </div>
    <div className="about-right">
        <h3>Pharmacy & Diagnosis</h3>
        <h2>Your Health, Our Priority</h2>
        <p>Our hospital’s pharmacy services are designed to provide patients with convenient and comprehensive access to medications and pharmaceutical care.</p>
        <p><ol>
<li><b>Prescription Services:</b></li>

<ul><li><b>Inpatient and Outpatient Prescriptions:</b>We handle both inpatient medication orders and outpatient prescriptions, ensuring timely and accurate dispensing of medications.</li>
<li><b>Electronic Prescriptions: </b>Integration with the hospital’s electronic health record (EHR) system for seamless prescription management and refills.</li></ul>

<li><b>Medication Management:</b></li>

<ul><li><b>Medication Counseling: </b> Pharmacists provide counseling to patients on the proper use, potential side effects, and interactions of their medications. </li>
<li><b>Medication Reconciliation:</b> Ensuring accuracy of patient medications during transitions of care to prevent errors.</li> </ul>

<li><b>Convenient Access:</b></li>

<ul><li><b>I24/7 Pharmacy Services:</b> Round-the-clock availability of pharmacy services for inpatient needs.</li>
<li><b>Family Involvement:</b> We encourage family involvement in the care process, providing regular updates and involving them in decision-making.</li></ul>

<li><b> Home Delivery:</b></li>
<ul><li>Home delivery options for outpatient prescriptions to ensure patients receive their medications promptly and conveniently.
</li></ul>

</ol></p>
        

    </div>
  
</div>
    
  )
}

export default Service4
