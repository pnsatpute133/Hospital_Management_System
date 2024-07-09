import React from "react";
import "./Doctor.css";
import Doc_1 from "./../../assets/Doc-1.jpeg";
import Doc_2 from "./../../assets/Doc-2.jpeg";
import Doc_3 from "./../../assets/Doc-3.jpeg";
import Doc_4 from "./../../assets/Doc-4.jpeg";
import Doc_5 from "./../../assets/Doc-5.jpeg";
import Doc_6 from "./../../assets/Doc-6.jpeg";

const Doctor = () => {
  return (
    <div>
      <div className="doctor">
        <div className="card">
          <div className="gradient"></div>
          <div className="profile-down">
            <img src={Doc_1} alt="" />
            <div className="profile-title">Mario Speedway</div>
            <div className="profile-description">Cardiologist</div>
          </div>
          <div className="profile-button">
            <a href="mailto:pnsatpute133@gmail.com">Book Appointment</a>
          </div>
        </div>

        <div className="card">
          <div className="gradient"></div>
          <div className="profile-down">
            <img src={Doc_2} alt="" />
            <div className="profile-title">Anna Sthesia</div>
            <div className="profile-description">Surgeon</div>
          </div>
          <div className="profile-button">
            <a href="mailto:pnsatpute133@gmail.com">Book Appointment</a>
          </div>
        </div>

        <div className="card">
          <div className="gradient"></div>
          <div className="profile-down">
            <img src={Doc_3} alt="" />
            <div className="profile-title">Anna Maul</div>
            <div className="profile-description">Neurosurgeon</div>
          </div>
          <div className="profile-button">
            <a href="mailto:pnsatpute133@gmail.com">Book Appointment</a>
          </div>
        </div>
      </div>

      <div className="doctor">
        <div className="card">
          <div className="gradient"></div>
          <div className="profile-down">
            <img src={Doc_4} alt="" />
            <div className="profile-title">Gail Forcewind</div>
            <div className="profile-description">Urology</div>
          </div>
          <div className="profile-button">
            <a href="mailto:pnsatpute133@gmail.com">Book Appointment</a>
          </div>
        </div>

        <div className="card">
          <div className="gradient"></div>
          <div className="profile-down">
            <img src={Doc_5} alt="" />
            <div className="profile-title">Patey Cruiser</div>
            <div className="profile-description">Eye Specialist</div>
          </div>
          <div className="profile-button">
            <a href="mailto:pnsatpute133@gmail.com">Book Appointment</a>
          </div>
        </div>

        <div className="card">
          <div className="gradient"></div>
          <div className="profile-down">
            <img src={Doc_6} alt="" />
            <div className="profile-title">Paul Moliv</div>
            <div className="profile-description">Dentist</div>
          </div>
          <div className="profile-button">
            <a href="mailto:pnsatpute133@gmail.com">Book Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
