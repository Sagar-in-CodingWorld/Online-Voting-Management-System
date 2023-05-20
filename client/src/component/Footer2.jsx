import React from "react";
import '../stylesheet/Footer.css'
import { NavLink } from "react-router-dom";

const Footer2 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-sm-2 menu ">
            <div className="imp">
              <h3>Other Important Links</h3>
            </div>
            <div className="link">
              <nav>
                <ul>
                  <li><a href="https://eci.gov.in/"><button type="button" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i> link to state/UT CEO's</button></a></li>
                  <li><NavLink to='/' className="nav"><button type="button" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i> New Voters Portal</button></NavLink></li>
                  <li><NavLink to='/' className="nav"><button type="button" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i> Honorable Commission</button></NavLink></li>
                  <li><NavLink to='/' className="nav"><button type="button" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i> Voter Login</button></NavLink></li>
                </ul>
              </nav>
            </div>
            <div className="contact">
              <h3><u>Contact Us</u></h3>
              <p>For details of eligibility criteria or any other additional information related to electoral forms, kindly visit</p>
              <a href="https://eci.gov.in/">https://eci.gov.in/</a>
              <p>For any other technical feedback or issues on the portal kindly send your feedback to ECI Technical Support</p>
              <p><i className="fa-solid fa-phone-volume"></i> Toll free Number :1800111950</p>
            </div>
            <div className="other">
              <h4><u>Other Links</u></h4>
              <a href="https://results.eci.gov.in/">election Commision of India</a><br /><br />
              <a href="https://www.nvsp.in/#">Chief Electorial Officer of India</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer2;