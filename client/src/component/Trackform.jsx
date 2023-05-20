import React from 'react';
// import "../MFORM/Trackform.css";
import '../stylesheet/Trackform.css'
import { Footer3 } from './Footer3';
import TopmenuC from '../CITIZEN/TopmenuC';
function Trackform() {
    return (
        <div className='track-form'>


            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 first p-0'>
                        <div className='col-10 col-sm-5 col-md-4 col-lg-4 col-xl-4 outer'>
                            <p className='sing-heading'>Track Application</p>
                            <div className='logo-div'>
                                <img className='logo' src='/img/track.jpg'></img><br></br>
                            </div>
                            <input type='text' className='form-control input-nam' placeholder='Enter Your Application ID'></input><br></br>
                            <input type='date' className='form-control input-nam'></input><br></br>
                            <button type="button" className="btn bttn btn-success">Check Button</button>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-12 p-0"> 
                        <Footer3 />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Trackform