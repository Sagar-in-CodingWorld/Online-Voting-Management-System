import React from 'react';
import "../CITIZENCSS/SideberC.css";
import { NavLink } from "react-router-dom";

export const SidebarC = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className='col-12 p-1 nav-div'>
                        <nav className=''>
                            <NavLink to='' className='nav'><i className='fas fa-tachometer-alt'></i>Dashboard</NavLink>
                        </nav>

                        {/* <nav className='side-menu'>
                            <NavLink to='/admin' className='nav' id="active"><i className='fas fa-tachometer-alt'></i>Dashboard</NavLink>
                            <NavLink to=''  className='nav' style={{ color: 'black' }}><i className="fa-solid fa-bolt" style={{ color: 'blue' }}></i>Varify Electors<i id="drop" className="fas fa-angle-right"></i></NavLink>
                            <div id="submenu">
                                <NavLink to='/verify-electors/elector-registration' className='nav1'><i className="fa-solid fa-book" style={{ color: 'orangeyellow' }}></i>Elector Registration</NavLink>
                                <NavLink to='/verify-electors/verified' className='nav1'><i className="fa-solid fa-circle-check" style={{ color: 'skyblue' }}></i>Verified</NavLink>
                                <NavLink to='/verify-electors/rejected' className='nav1'><i className="fa-solid fa-circle-xmark" style={{ color: 'lightgreen' }}></i>Rejected</NavLink>
                            </div>
                            
                            <NavLink to='/Election' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-bars-progress" style={{ color: 'green' }}></i>Add Election<i id='drop' className='fas fa-angle-right'></i></NavLink>
                            
                            <NavLink to='/voterlist' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-bars" style={{ color: 'purple' }}></i>Voter List<i id="drop1" className="fas fa-angle-right"></i></NavLink>
                            <NavLink to='/candidate' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-users" style={{ color: 'orange' }}></i>Add Candidate<i id='drop' className='fas fa-angle-right'></i></NavLink>
                            <NavLink to='/Userinfo' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-user" style={{ color: 'lightgreen' }}></i>User info<i id='drop' className='fas fa-angle-right'></i></NavLink>
                            <NavLink to='/Status' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-square-poll-vertical" style={{ color: 'red' }}></i>Status<i id='drop' className='fas fa-angle-right'></i></NavLink>
                            
                        </nav> */}
                    </div>


                    
                </div>
            </div>

        </>
    )
}
