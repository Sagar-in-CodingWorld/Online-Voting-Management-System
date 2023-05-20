import React from "react";
import '../stylesheet/Readmore1.css'
import { NavLink } from "react-router-dom";

const Readmore2 = () => {
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
                        <li><u><h4>Shri Anup Chandra Pandey (Election Commissioner)</h4></u></li>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row m-0 p-0">
                    <div className="sorir1">
                        <img src="com.jpg" alt="head" height="220px" width="280px" />
                        <p>Shri Anup Chandra Pandey assumed charge as Election Commissioner (EC) of India on 9th June, 2021. Shri Pandey, an officer of Indian Administrative Service of 1984 batch, Uttar Pradesh cadre superannuated as Chief Secretary, Government of Uttar Pradesh in August 2019.</p>
                        <p>During the span of about 37 years of distinguished Government of India service, Shri Pandey has worked in various Ministries & Departments at the Centre and his state cadre of Uttar Pradesh.</p>
                        <p>As Chief Secretary, he has organized elections in 2019 in the State of Uttar Pradesh. He has worked as District Election Officer in two districts. He has been associated in various capacities as DEO and Returning Officer for a very long time. He has also been election observer in presidential elections/ Central and Assembly elections for a number of times.</p>
                        <p>Shri Pandey has worked as Principal Secretary Planning, Principal Secretary Medical Education, Additional Chief Secretary Finance and Industrial Development Commission in Uttar Pradesh.</p>
                        <p>Prior to joining the Election Commission of India, Shri Pandey served as a Member National Green Tribunal Oversight Committee Uttar Pradesh.</p>
                        <p>He has held diverse portfolios during his deputation with the central government.  He served as Additional Secretary, Ministry of Defence and Joint Secretary, Ministry of Labour & Employment, Government of India. He also worked as Director in Ministry of Health & Family Welfare and as Additional Director General in Bureau of Indian Standards.</p>
                        <p>Shri Pandey has a keen interest in writing and has authored a book titled “Governance in Ancient India” which explores the evolution, nature, scope, functions and all related aspects of ancient Indian Civil Service from the Rig Vedic period to 650 AD.</p>
                        <p>Born on 15th February 1959, Shri Anup Chandra holds a Bachelor’s Degree in Mechanical Engineering from Punjab Engineering College and a Master’s degree in Materials Management from Panjab University. Shri Anup Chandra who has a keen interest in study of history holds a Doctorate of Philosophy in Ancient Indian History from Magadh University.</p>
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

export default Readmore2;