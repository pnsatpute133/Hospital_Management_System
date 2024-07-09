/* --- type rafce for code snippet ---*/
import React from 'react'
import './Contact.css'/* import css file */
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7ed7374f-6e16-4896-9f48-382027507f55");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Your Health, Our Priority
               At [Hospital Name], we are committed to providing exceptional healthcare services and ensuring your comfort and well-being. Whether you have questions, need to schedule an appointment, or require assistance, our dedicated team is here to help.</p>
               <ul>
                <li><img src={mail_icon} alt="" />contact@WellNessHub.com</li>
                <li><img src={phone_icon} alt="" />+91 123-456-7890</li>
                <li><img src={location_icon} alt="" />GaneshKhind Road, Shivaginagar <br />Pune 411005</li>
    
               </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name="Message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
