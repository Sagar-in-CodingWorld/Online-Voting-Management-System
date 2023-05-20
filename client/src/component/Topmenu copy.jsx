import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheet/Topmenu.css';

export const Topmenu = () => {
    return (
        <>
            <BrowserHeader />
            <nav className="navbar navbar-dark">
                {/* <button type="button" className="p-1 px-2 btn btn-outline-success" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    MENU
                </button> */}
                <button type="button" className="p-1 px-2 btn btn-outline-success" id="collapser">
                    MENU
                </button>

                {/* <button className="navbar-toggler menubutton p-2 px-3" style={{ fontSize: '13px' }} type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='text-white'>MENU</span>
                </button> */}
                {/* <img className='logo' src="/img/eci-logo.png" alt="eci-logo" /> */}
            </nav>


            {/* <div  */}


                <section id="collapsed">
                    {/* <div className="navbar"> */}
                    <div className=" bg-primary">
                        <div className="row">
                            {/* <nav className='col-12 col-md-3 col-sm-6 col-lg-3 col-xl-3 text-center bg-primary'>
                                <ul>
                                    <span>Menu Heading</span>
                                    <li><NavLink className='menu-nav' to='/'>Register to Vote</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Track Application</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Know Your Polling Booth</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Register To Vote</NavLink></li>
                                </ul>
                            </nav>
                            <nav className='col-12 col-md-3 col-sm-6 col-lg-3 col-xl-3 text-center bg-warning'>
                                <ul>
                                    <span>Menu Heading</span>
                                    <li><NavLink className='menu-nav' to='/'>Register to Vote</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Track Application</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Know Your Polling Booth</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Register To Vote</NavLink></li>
                                </ul>
                            </nav>
                            <nav className='col-12 col-md-3 col-sm-6 col-lg-3 col-xl-3 text-center bg-danger'>
                                <ul>
                                    <span>Menu Heading</span>
                                    <li><NavLink className='menu-nav' to='/'>Register to Vote</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Track Application</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Know Your Polling Booth</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Register To Vote</NavLink></li>
                                </ul>
                            </nav>
                            <nav className='col-12 col-md-3 col-sm-6 col-lg-3 col-xl-3 text-center bg-secondary'>
                                <ul>
                                    <span>Menu Heading</span>
                                    <li><NavLink className='menu-nav' to='/'>Register to Vote</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Track Application</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Know Your Polling Booth</NavLink></li>
                                    <li><NavLink className='menu-nav' to='/'>Register To Vote</NavLink></li>
                                </ul>
                            </nav> */}

                        </div>
                    </div>
                    {/* </div> */}
                </section>

                {/* <BrowserHeader /> */}

                {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-12 header">
                        <img className='logo' src="/img/eci-logo.png" alt="eci-logo" />
                    </div>
                </div>
            </div> */}



            </>
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
                                <NavLink to='citizen'>
                                    <button type="button" className="btn btn-outline-success p-0 px-3 float-right ">
                                        <i className=" fa-solid fa-user"></i>
                                        <span>Citizen Services</span>
                                    </button>
                                </NavLink>
                                <NavLink to='admin'>
                                    <button type="button" className="btn btn-outline-success p-0 px-3 float-right ">
                                        <i className=" fa-solid fa-user"></i>
                                        <span>Admin Panel</span>
                                    </button>

                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}
            export {BrowserHeader}