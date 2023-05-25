import React from 'react';
// import { useEffect } from 'react';
import "../CITIZENCSS/Card.css";
import { NavLink } from "react-router-dom";
 
function Card() {
    
    // useEffect(() =>{showTime();},[])

    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-around">
                    {/* <div className='col-12 col-lg-2 text-center card-div'>
                        <NavLink to='/citizen/voter-registration' className='navtext' ><img src="CITIZENIMAGE/newcard.webp" className='image' alt="poster" width='100%' /></NavLink>
                        <NavLink to='/citizen/voter-registration' className='navtext' ><span className='card-text'>Apply New Voter</span></NavLink>
                    </div> */}
                    <div className='col-12 col-lg-2 text-center card-div'>
                        <NavLink to='/citizen/voter-registration' ><img src="/CITIZENIMAGE/newcard.webp" alt="poster" width='100%' /></NavLink>
                        <NavLink to='/citizen/voter-registration' className='navtext' ><span className='card-text'>Register as a new Voter</span></NavLink>
                    </div>
                    <div className='col-12 col-lg-2 text-center card-div'>
                        <NavLink to='/citizen/poll' ><img src="/CITIZENIMAGE/vote.jpeg" alt="poster" width='100%' /></NavLink>
                        <NavLink to='/citizen/poll' className='navtext' > <span className='card-text'>Give Vote </span></NavLink>
                    </div>
 
                    <div className='col-12 col-lg-2 text-center card-div'>
                      <NavLink to='' ><img src="/CITIZENIMAGE/corr2.webp" alt="poster" width='100%' /></NavLink>
                        <NavLink to='' className='navtext' > <span className='card-text'>Update or Modification</span></NavLink>
                    </div>
                    <div className='col-12 col-lg-2 text-center card-div'>
                        <NavLink to='download-e-voter-card' ><img src="/CITIZENIMAGE/dow-pdf.jpeg" alt="poster" width='100%' /></NavLink>
                        <NavLink to='download-e-voter-card' className='navtext' > <span className='card-text'>Download E-voter ID</span></NavLink>
                    </div>
                    <div className='col-12 col-lg-2 text-center card-div'>
                        <NavLink to='/track-application' ><img src="/CITIZENIMAGE/tra.png" alt="poster" width='100%' /></NavLink>
                        <NavLink to='/track-application' className='navtext' > <span className='card-text'>Track Application </span></NavLink>
                    </div>
                    {/* <div className='col-12 col-lg-2 text-center card-div'>
                        <NavLink to='/show-status' > <img src="/CITIZENIMAGE/tra.png" alt="poster" width='100%'/></NavLink>
                        <NavLink to='/show-status' className='navtext' > <span className='card-text'>Track Application</span></NavLink>
                    </div> */}
                </div>
                <div className="row d-flex justify-content-around">
                    <div className='col-12 col-lg-4 text-center card-divs d-flex justify-content-center mt-5'>
                        <video className='video' width="100%" autoPlay loop>
                            <source src='video1.mp4' type='video/mp4'></source>
                        </video>
                    </div>
                    <div className='col-12 col-lg-4 text-center card-divs  d-flex justify-content-center mt-5'>
                        <video className='video' width="100%" autoPlay loop>
                            <source src='video2.mp4' type='video/mp4'></source>
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card