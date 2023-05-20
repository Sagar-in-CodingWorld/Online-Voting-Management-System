import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheet/Topmenu.css';
export const Topmenu = () => {
    const collapse = () => {
        if(document.getElementById('collapsed').style.display === "flex"){
            document.getElementById('collapsed').style.display = "none";
            
        }else{
            document.getElementById('collapsed').style.display = "flex";
        }
    } 
    return ( 
        <div className='topMenu'>
            <BrowserHeader />
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-12 p-0">
                        <div className='navbar navbar-titlebar'>
                            <button type="button" onClick={collapse} className="p-1 px-2 btn btn-outline-success" id="collapser">
                                MENU
                            </button>
                        </div> 
                    </div>
                </div> 
                <div className="row pt-0" id="collapsed">
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 menues ">
                    {/* <div className="exit">X</div> */}
                        <ul className='p-0 text-center'>
                            <span>Quick links</span>
                            <li><NavLink className='menu-nav' to='citizen/voter-registration'>Register to Vote</NavLink></li>
                            <li><NavLink className='menu-nav' to='track-application'>Track Application</NavLink></li>
                            <li><NavLink className='menu-nav' to='unavailable'>Know Your Polling Booth</NavLink></li>
                            <li><NavLink className='menu-nav' to='Contact'>Contact</NavLink></li>
                        </ul>
                    </div> 
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3  menues ">
                        <ul className='p-0 text-center'>
                            <span>Quick links</span>
                            <li><NavLink className='menu-nav' to='sign-up'>Sign-up New User</NavLink></li>
                            <li><NavLink className='menu-nav' to='citizen/download-e-voter-card'>download E-Voter card</NavLink></li>
                            <li><NavLink className='menu-nav' to='citizen'>User Panel</NavLink></li>
                            <li><NavLink className='menu-nav' to='/About'>About</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3  menues ">
                        <ul className='p-0 text-center'>
                            <span>Quick links</span>
                            <li><NavLink className='menu-nav' to='/'>Status</NavLink></li>
                            <li><NavLink className='menu-nav' to='unavailable'>Update/Modify details</NavLink></li>
                            <li><NavLink className='menu-nav' to='unavailable'>Know Your Polling Booth</NavLink></li>
                            <li><NavLink className='menu-nav' to='/'>Honourable Commission</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3  menues ">
                        <ul className='p-0 text-center'>
                            <span>Quick links</span>
                            <li><NavLink className='menu-nav' to='/'>search in electoral booth</NavLink></li>
                            <li><NavLink className='menu-nav' to='citizen/voter-registration'>Apply voter card</NavLink></li>
                            <li><NavLink className='menu-nav' to='/'>Login</NavLink></li>
                            <li><NavLink className='menu-nav' to='/'></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


const BrowserHeader = () => {
    return (  
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 header">
                        <div className='float-left'>
                            <img className='logo' src="/img/eci-logo.png" alt="eci-logo" />

                        </div>
                        <div className='float-right navLinkInHeader mt-2'>
                            <NavLink to='/citizen/login'>
                                <button type="button" className="btn btn-outline-success p-0 px-3 float-right ">
                                    <i className=" fa-solid fa-user"></i>
                                    <span>Citizen Services</span>
                                </button>
                            </NavLink>
                            {/* <NavLink to='/admin'>
                                <button type="button" className="btn btn-outline-success p-0 px-3 float-right ">
                                    <i className=" fa-solid fa-user"></i>
                                    <span>Admin Panel</span>
                                </button>

                            </NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { BrowserHeader }