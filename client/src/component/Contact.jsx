import React from "react";
import '../stylesheet/Contact.css'
import { NavLink } from "react-router-dom";
// import '../stylesheet/Footer.css'

const Contact = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 bg-dark ">
                        <div className="uup">
                            <p>Toll Free : 1900</p>
                            <hr className="vr"></hr>
                            <NavLink to='/Contact'>Contact</NavLink>
                        </div>
                        {/* <div className="upp">
                            <a href="https://eci.gov.in/contact-us/ngsp/national-grievance-services-portal-r3/">Toll Free - 1950</a>
                            <hr className="vr"></hr>
                            <NavLink to="/Contact">Contact</NavLink>
                        </div> */}

                    </div>
                    <div className="col-12 col-sm-4 col-md-12 col-lg-12 m-0 up pt-2">
                        <u><p>Contact Us</p></u>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-0 p-0 bod">
                        <img src="back vote.avif" alt="contact" height="300px" width="100%" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-sm-3 m-0 p-0">
                        <div className='marquee'>
                            <div className='news'>
                                <img className='tag' src="img1.png"></img>
                            </div>
                            <div className='text'>
                                <marquee className="mt-2">
                                    List of Observers Deployed in Assembly Elections 2023:

                                    General Election to Legislative Assemblies of Meghalaya, Nagaland and Tripura, 2023 - Press Note- reg.:
                                    Schedule for Bye-election to 1(one) Parliamentary Constituency of UT of Lakshadweep and 6 (Six) Legislative Assemblies of Arunachal Pradesh, Jharkhand, Tamil Nadu, West Bengal and Maharashtra– reg.:
                                    Know Your Candidate' Mobile Application.
                                </marquee>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-12 col-sm-4 dow m-0 p-0 mt-4">

                        <div className="dow1 mt-5">
                            <u><p>The Office</p></u>
                            <span><i className="fa-solid fa-location-dot"></i> Address: SDF Building, Sector-V, kol-700113</span><br /><br />
                            <span><i className="fa-solid fa-phone"></i> Phone: 09674735473, 2536-7896, 18008904263</span><br /><br />
                            <span><i className="fa-solid fa-envelope"></i> Mail: Ardent Computertech@gmail.com</span><br /><br />
                            <span><i className="fa-brands fa-linkedin"></i> linkedin: https://www.linkedin.com/company/ardent-globe</span><br /><br />
                            <span><i className="fa-brands fa-facebook"></i> Facebook: https://www.facebook.com/Ardentgroup/</span><br /><br />
                        </div>
                        <div className="loc mt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.278482443191!2d88.4290293749763!3d22.568685479494498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275d225555559%3A0x50bfb8cf3005f8d1!2sARDENT%20COMPUTECH%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1681460296954!5m2!1sen!2sin" width="900" height="500" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-12 md-6 lg-6 sm-3 quick">
                        <div className="links mt-3">
                            <h5>Quick links</h5><hr />

                            <a href="https://eci.gov.in/about/about-eci/">Apply for voter card</a><br /><hr />
                            <a href="https://eci.gov.in/about/about-eci/">Admin Portal</a><br /><hr />
                            <a href="https://eci.gov.in/about/about-eci/">User Portal</a><hr />

                        </div>

                        <div className="links1 mt-3">
                            <h5>Media & Publications</h5><hr />
                            <a href="https://eci.gov.in/files/category/10-current-issues/">Current Issues</a><br /><hr />
                            <a href="https://eci.gov.in/files/category/11-press-releases/">Public issues</a><br /><hr />
                            <a href="https://eci.gov.in/important-instructions/">Important Instructions</a><hr />
                        </div>
                        <div className="links2 mt-3">
                            <h5>ECI Divisions</h5><hr />
                            <a href="https://eci.gov.in/divisions-of-eci/communication/">Communication</a><hr />
                            <a href="https://eci.gov.in/delimitation-website/index/">Delimitation</a><br /><hr />
                            <a href="https://eci.gov.in/candidate-political-parties/expenditure-reports/expenditure-reports/">Exprenditure</a><br /><hr />
                            <a href="https://eci.gov.in/candidate-political-parties/">Political Parties</a><br /><hr />

                        </div>
                        <div className="links3 mt-3">
                            <h5>Explore More</h5><hr />
                            <NavLink to="/Contact">Contact Us</NavLink><br /><hr />
                            <NavLink to="/">About</NavLink><br /><hr />
                        </div>
                    </div>
                </div> */}
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

export default Contact;