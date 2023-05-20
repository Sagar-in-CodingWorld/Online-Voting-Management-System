import React from "react";
import '../stylesheet/Readmore1.css'
import { NavLink } from "react-router-dom";

const Readmore3 = () => {
    return (
        <>
            <div className="Container-fluid">
                <div className="row m-0 p-0">
                    <div className="col-12 col-lg-12 col-md-12 col-sm-4 opor ">
                        <img src="eci-logo.png" alt="logo" height="70px" width="300px" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row m-0 p-0">
                    <div className="sorir mt-4">
                        <li><i className="fa-regular fa-star fa-2x"></i></li>
                        <li><u><h4> Shri Arun Goel (Election Commissioner)</h4></u></li>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row m-0 p-0">
                    <div className="sorir1">
                        <img src="com1.jpg" alt="head" height="220px" width="280px" />
                        <p>Shri Arun Goel assumed charge as Election Commissioner (EC) of India on 21st November, 2022.  Shri Goel, an Indian Administrative Service officer of 1985 batch, Punjab cadre superannuated as Secretary, Ministry of Heavy Industry, Govt of India after more than 37 years of service. Born on 7th December 1962, at Patiala, he is M. Sc.(Mathematics) and was awarded Chancellors Medal of Excellence for being First Class First and Record Breaker throughout in all the examinations of Punjabi University.   He is Post-Graduate with Distinction in Development Economics from Churchill College, University of Cambridge, England and has been trained at John F Kennedy School of Government, Harvard University, USA.</p>
                        <p>As Secretary, Heavy Industries, he catalyzed E-vehicle movement in India to a Tipping Point.  He implemented Production Linked Incentive (PLI) Scheme for Auto Industry in a record time getting investments worth Rs. 67690 crores against target of Rs. 42,500 crores and PLI for Advanced Chemistry Cell Battery Storage getting manufacturing set up for 98 GW against target of 50 GW.   To kick-start and create an environment for Engineering and R&D, he got developed six web-based open manufacturing technology innovation platforms to bring India’s technical resources and the concerned Industry on to one network to facilitate identification of technology problems faced by Industry and to crowd source solutions for the same in a systematic manner so as to accelerate start-ups and angel funding for Indian innovations.  He administered 41 CPSEs across India from owner’s perspective and directed their operations, disinvestment, closure, revival, restructuring, liquidation, etc. </p>
                        <p>In Govt of India, he also worked as Secretary, Ministry of Culture; Vice-Chairman, Delhi Development Authority; Additional Secretary & Financial Advisor, Ministry of Labour & Employment; Joint Secretary, Department of Revenue, Ministry of Finance. </p>
                        <p>He was District Election Officer of Ludhiana district (1995-2000) and Bathinda district (1993-94) where he smoothly conducted various Lok Sabha and Vidhan Sabha elections. </p>
                        <p>In Punjab, as Principal Secretary, he steered Master Plans of New Chandigarh and all other major towns, implemented the much delayed Power Reforms: unbundling Electricity Board into Corporations, overhauled estimation procedure in infrastructure works and introduced E-tendering resulting in 25% savings to Government exchequer. </p>
                        <p>He is an outdoor person and an avid traveller fond of skydiving, scuba diving, white-water rafting, paragliding and mountain zipping.</p>
                        
                    </div>
                    <div className="arow mt-4 mb-3">
                        <span>
                            <i className="fa-solid fa-less-than"></i>
                            <NavLink to='/'> Back to Homepage</NavLink>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 md-3 lg-6 sm-2 menu p-0 m-0 ">
                        <div className="imp m-0 p-0">
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
                        <div className="other pb-2">
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

export default Readmore3;