import React from "react";
import "../CITIZENCSS/TopmenuC.css";
import { NavLink } from "react-router-dom";

function TopmenuC() {
    const profilePic = '/img/profile1.jpg';
    const name = "Sagar Nunia";
    function menuToggle() {
        if (document.getElementById('bars').style.display === 'none') {
            document.getElementById('navbar').style.display = "flex";
            document.getElementById('bars').style.display = 'inline';
            document.getElementById('dots').style.display = 'none';

        } else {
            // document.getElementById('bars').style.animation = 'goVisible'
            document.getElementById('navbar').style.display = "none";
            document.getElementById('bars').style.display = 'none';
            document.getElementById('dots').style.display = 'inline';


        }
    }
    return (
        <>
            <div className="container-fluid fixed-top">
                <div className="row" id="top-menu-color">
                    <div className="col-1  d-flex align-items-center m-0 p-0 logo-img bg-ligh ">
                        <img src="/CITIZENIMAGE/logo6.png" alt="logo" />

                    </div>
                    {/* <div className="top-left col-2 col-sm-2 col-md-2 col-lg-1 col-xl-3 bg-warnin">
                        <NavLink to='/' id="navlinks" className='ml-3 text-decoration-none'>Home</NavLink>
                        <div className="vr-bar">|</div>
                        <NavLink to='' id="navlinks" className=' text-decoration-none'>About</NavLink>
                    </div> */}
                    <div className="top-left-title col-5  bg-dange">
                        <span className=''>राष्ट्रीय मतदाता सेवा पोर्टल</span><br/>
                        <span className=''>NATIONAL VOTER SERVICE PORTAL</span>

                    </div>
                    <div className="top-right pl-0 col-6 mt-1  bg-primar">
                        <div className="bg-dange" id="menu-bars" onClick={menuToggle}>
                            <i id='dots' className="fa-solid fa-ellipsis-vertical"></i>
                            <i id='bars' className="fa-solid fa-bars"></i>
                        </div>
                        <i className="fa-regular fa-bell mr-2"></i>
                        <span>{name}</span>
                        {/* <img src={profilePic} alt="profile picture" width='30px' height="30px" /> */}
                        <img src={profilePic} alt="profile picture"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    {/* <div>
                        Dashboard
                    </div> */}
                        <div className="log-out-btn">
                            <NavLink to='/citizen' className='mr-3' id='log-out-nav'>
                                <i className="fa-solid fa-chalkboard-user"></i>
                                <span className='log-out-text m-1'>Dashboard</span>
                            </NavLink>
                            <NavLink to='/' id='log-out-nav'>
                                <span className='log-out-text m-1'>Log out</span>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="row mt-1" id='navbar'>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
                        <div className="navcard">
                            <NavLink to='/citizen/voter-registration' className='navtext' ><i className="fa-solid fa-address-card fa-beat icon-nav"></i>Apply Voter Card</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
                        <div className="navcard">
                            <NavLink to='/citizen/poll' className='navtext' ><i className="fa-solid fa-square-check fa-beat icon-nav"></i>Complete Your Vote</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="navcard">
                            <NavLink to='download-e-voter-card' className='navtext' ><i className="fa-solid fa-circle-down fa-beat icon-nav"></i>Download E-Voter Id</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="navcard">
                            <NavLink to='/citizen/update-or-correction' className='navtext' ><i className="fa-solid fa-file-pen fa-beat icon-nav"></i>Update or Modify</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
                        <div className="navcard">
                            <NavLink to='/citizen/electoral-roll' className='navtext' ><i className="fa-solid fa-file-pdf fa-beat icon-nav"></i>Download Electoral Roll</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 ">
                        <div className="navcard">
                            <NavLink to='/track-application' className='navtext' ><i className="fa-solid fa-map-location-dot fa-beat icon-nav"></i>Track Your Application</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="navcard">
                            <NavLink to='/citizen/electoral-roll' className='navtext' ><i className="fa-solid fa-magnifying-glass fa-beat icon-nav"></i>Search in Electoral Roll</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="navcard">
                            <NavLink to='/register-complain' className='navtext' ><i className="fa-solid fa-book fa-beat icon-nav"></i>Register a Complain</NavLink>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default TopmenuC;
