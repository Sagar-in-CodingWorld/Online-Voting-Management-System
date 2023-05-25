import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheet/Sidebar.css'
import { ElectorRegistration } from './Admin/ElectorRegistration'

export const Sidebar = () => {
  
  const profilePic = '/img/profile1.jpg'

  const ShowMenu = () => {
    if (document.getElementById('submenu').style.display === 'block') {
      document.getElementById('submenu').style.display = 'none';
      document.getElementById('drop').className = 'fas fa-angle-right';
    } else {
      document.getElementById('submenu').style.display = 'block';
      document.getElementById('drop').className = 'fas fa-angle-down'; 
    }
 
  }
  const showLogout = () => {
    if (document.getElementById('drop0').className === 'fas fa-angle-double-right') {
      document.getElementById('drop0').className = 'fas fa-angle-double-down';
      document.getElementById('log-out').style.display = 'block';
    } else {
      document.getElementById('drop0').className = 'fas fa-angle-double-right';
      document.getElementById('log-out').style.display = 'none';
    }
  } 
 
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 whole-sidebar">
            {/* <div className="sidebar"> */}
            <div className="sidebar-top">
              <img src="/img/eci-logo.png" alt="logo" width='100%' />

            </div>
            <div className='profile'>
              <img src={profilePic} alt="profile-pic" />
              <div className='profile-name ml-2 mt-3 bg-ligh'>
                <span>Sagar Nunia</span>
                <p>Administrator</p>
              </div>
              <div onClick={showLogout} className='right bg-primar'>
                <i id='drop0' className='fas fa-angle-double-right'></i>
              </div>
              {/* <i id='drop11' className="fa-solid fa-angles-right bg-dark"></i> */}
            </div>
            <div id="log-out">
              <NavLink to='/citizen' className="bg-secondar px-4" id='logout'><i className="fa-solid fa-right-from-bracket fa-rotate-180 ml- my-2"></i><span className='ml-2'>Log out</span></NavLink>
            </div>

            <div id="sidebar-bottom">
              <nav>
                <NavLink to='/admin' className='nav' id="active"><i className='fas fa-tachometer-alt'></i>Dashboard</NavLink>
                <NavLink to='' onClick={ShowMenu} className='nav' style={{ color: 'black' }}><i className="fa-solid fa-bolt" style={{ color: 'blue' }}></i>Varify Electors<i id="drop" className="fas fa-angle-right"></i></NavLink>
                <div id="submenu">
                  <NavLink to='/verify-electors/elector-registration' element={<ElectorRegistration />} className='nav1'><i className="fa-solid fa-book" style={{ color: 'orangeyellow' }}></i>Elector Registration</NavLink>
                  <NavLink to='/verify-electors/verified' className='nav1'><i className="fa-solid fa-circle-check" style={{ color: 'skyblue' }}></i>Verified</NavLink>
                  <NavLink to='/verify-electors/rejected' className='nav1'><i className="fa-solid fa-circle-xmark" style={{ color: 'lightgreen' }}></i>Rejected</NavLink>
                </div>
                {/* <NavLink to='' onClick={''} className='nav'><i className='fas fa-user-nurse' style={{ color: '#FFB84C' }}></i>Nurse<i id='drop1' className='fas fa-angle-right'></i></NavLink> */}
                {/* <div id="submenu1"> */}
                {/* <NavLink to='' className='nav1'><i className='far fa-circle'></i>Add Nurse</NavLink> */}
                {/* <NavLink to='' className='nav1'><i className='far fa-circle'></i>View Nurse</NavLink> */}
                {/* </div> */}
                <NavLink to='' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-bars-progress" style={{ color: 'green' }}></i>Add Election<i id='drop' className='fas fa-angle-right'></i></NavLink>
                {/* <NavLink to='' className='nav' style={{color:'black'}}><i className='fas fa-circle' style={{ color: '' }}></i>Nomination<i id='drop' className='fas fa-angle-right'></i></NavLink>
                <NavLink to='' className='nav' style={{color:'black'}}><i className='fas fa-circle' style={{ color: '' }}></i>Candidates<i id='drop' className='fas fa-angle-right'></i></NavLink> */}
                <NavLink to='/voterlist' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-bars" style={{ color: 'purple' }}></i>Voter List<i id="drop1" className="fas fa-angle-right"></i></NavLink>
                <NavLink to='/candidate' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-users" style={{ color: 'orange' }}></i>Add Candidate<i id='drop' className='fas fa-angle-right'></i></NavLink>
                <NavLink to='/Userinfo' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-user" style={{ color: 'lightgreen' }}></i>User info<i id='drop' className='fas fa-angle-right'></i></NavLink>
                <NavLink to='/view-candidate-details' className='nav' style={{ color: 'black' }}><i className="fa-solid fa-square-poll-vertical" style={{ color: 'red' }}></i>View Candidates<i id='drop' className='fas fa-angle-right'></i></NavLink>
                {/* <div id="submenu1">
                  <NavLink to='' className='nav1'><i className='far fa-circle'></i>Pending Verification</NavLink>
                  <NavLink to='' className='nav1'><i clas/*-sName='far fa-circle'></i>Success Verification</NavLink>
                  <NavLink 
                   kokmkikljmoilkm,jy7kkklokklo,klmo,lo;p 
                         c .='' className='nav1'><i className='far fa-circle'></i>Rejected</NavLink>
                </div> */}

                {/* <NavLink to='' className='nav'><i className="fas fa-book" style={{ color: '#8BF5FA' }}></i> Appointment <i id="drop3" className="fas fa-angle-right"></i></NavLink> */}
                {/* <NavLink to='' className='nav'><i className="fas fa-rupee-sign" style={{ color: '#D61355' }}></i> Fees</NavLink> */}
                {/* <NavLink to='' className='nav'><i className="fas fa-ambulance" style={{ color: '#FCE22A', fontSize: '12px' }}></i> Ambulance <i id="drop4" className="fas fa-angle-right"></i></NavLink> */}
                {/* <NavLink to='' className='nav'><i className="far fa-user" style={{ color: '#820000' }}></i> Staff <i id="drop5" className="fas fa-angle-right"></i></NavLink> */}
                {/* <NavLink to='' className='nav'><i className="fas fa-bed" style={{ color: '#A75D5D' }}></i> Bed <i id="drop6" className="fas fa-angle-right"></i></NavLink> */}
                {/* <NavLink to='' className='nav'><i className="fas fa-user" style={{ color: '#A31ACB' }}></i> User <i id="drop7" className="fas fa-angle-right"></i></NavLink> */}
              </nav>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
