import React from 'react'
import '../stylesheet/Footer.css'
import { NavLink } from "react-router-dom"

const Footer1 = () => {
    // AOS.init();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 md-6 lg-6 sm-4 quick" data-aos="zoom-in">
                        <div className="links mt-3">
                            <h5>Quick links</h5><hr />

                            <NavLink to='/'>Apply for voter card</NavLink><br /><hr />
                            <NavLink to='/Admin'>Admin Portal</NavLink><br /><hr />
                            <NavLink to='/citizen'>User Portal</NavLink><hr />



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
                            <NavLink to="/About">About</NavLink><br /><hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer1;
