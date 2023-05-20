import React from 'react';
import "../CITIZENSCSSFILE/Sideber.css" ;
import { NavLink } from "react-router-dom";

function Sideber() {
  return (
    <>
        
       
<div className="col-md-12 col-sm-12 col-lg-3 col-xl-3 card text-white bg-white mb-3">
  <div className="card-header">Dashboard</div>
  <div className="card-body">
    <div>
          
              <nav>
                <NavLink to='' className='nav' style={{color:'black'}}><i className="fa-solid fa-address-card" style={{color:'pink'}}></i>Epic no Download</NavLink><hr></hr>
                <NavLink to='/' className="nav" style={{color:'black'}}><i className="fa-solid fa-magnifying-glass" style={{color:'#159895'}}></i>Search in Elector al Roll</NavLink><hr></hr>
                <NavLink to='/' className="nav" style={{color:'black'}}><i className="fa-solid fa-user-check" style={{color:'red'}}></i>Correction/Modification</NavLink><hr></hr>
                <NavLink to='/' className="nav" style={{color:'black'}}><i className="fa-solid fa-download" style={{color:'black'}}></i>Download Electoral Roll</NavLink><hr></hr>
                <NavLink to='/' className="nav" style={{color:'black'}}><i className="fa-solid fa-map-location-dot" style={{color:'#5d9c59'}}></i>Track Application Status</NavLink><hr></hr>
              </nav>
            </div>
  </div>
</div>





<div className="card-group">
  <div className="card">
    <img src="dow-pdf.jpeg" className="card-img-top"/>
    <div className="card-body">
      <h6 className="card-title">Epic no Download</h6>
     
    </div>
  </div>
  <div className="card">
    <img src="Search.png" className="card-img-top" />
    <div className="card-body">
      <h6 className="card-title">Search in Elector al Roll</h6>
    
    </div>
  </div>
  <div className="card">
    <img src="corr2.webp" className="card-img-top"/>
    <div className="card-body">
      <h6 className="card-title">Correction/Modification</h6>
     
    </div>
  </div>
  <div className="card">
    <img src="green.avif" className="card-img-top" />
    <div className="card-body">
      <h6 className="card-title">Download Electoral Roll</h6>
     
    </div>
  </div>
  <div className="card">
    <img src="tra.png" className="card-img-top"/>
    <div className="card-body">
      <h6 className="card-title">Track Application Status</h6>
     
    </div>
  </div>

</div>
  


  <div className="row row-cols-1 row-cols-md-2">
  <div className="col mb-4">
    <div className="card">
    <video width="100%" controls>
        <source src='video2.mp4' type='video/mp4'></source>
      </video>
      
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <video width="100%" controls>
        <source src='video1.mp4' type='video/mp4'></source>
      </video>
      </div>
    </div>
  </div>
  
  
    </>
  )
}

export default Sideber