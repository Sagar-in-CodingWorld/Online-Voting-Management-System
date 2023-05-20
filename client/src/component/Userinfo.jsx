import React from 'react'
import { Sidebar } from '../component/Sidebar'
import { Timer } from '../component/Timer'

import { NavLink } from 'react-router-dom'
import { Footer3 } from '../component/Footer3'

const Userinfo = () => {
    function expand() {
        if (document.getElementById('search-box').style.display = "none") {
            document.getElementById("search-box").style.display = "block";
            // document.getElementById("search-icon").style.backgroundColor = "black";
            document.getElementById("search-icon").style.fontSize = "0px";

        } else {

        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 top-header">
                        {/* <div className='icon icon-offline'></div> */}
                        <div className="row pt-2">
                            {/* <div className="col-1"></div> */}
                            <div className="col-9 path bg-primar">
                                <NavLink to="/" id="path" style={{color:'black'}}>Home</NavLink>
                                <NavLink to="/admin" id="path" style={{color:'black'}}>/Dashboard</NavLink>
                                <NavLink to='/Userinfo' id='path' style={{color:'black'}}>/Userinfo</NavLink>
                            </div>
                            <div className="col-3 widgets bg-warnin p-2">
                                <div className="right-top-bar">
                                    <div className="timer"><Timer /></div>
                                </div>
                                <div className="right-bottom-bar bg-secondar">
                                    <form>
                                        <table className='table table-responsive bg-warnin'>
                                            <tr>
                                                <td><input type="search" name="search" placeholder='Search...' id='search-box' className='form-control' /></td>
                                                <td><i onClick={expand} id="search-icon" className='fas fa-search' style={{color:'black'}}></i></td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>


                            </div>







                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 side-menu p-3">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-sm-7 col-md-10 col-lg-9 col-xl-9 right-bar ">


                        <div className="row card-section">
                            <div className="col-4 col-sm-6 col-md-2 col-lg-3 col-xl-3 hCard ">
                                <span className='card-title'>PENDING APPLICATIONS</span>
                                {/* <i className='fas fa-tachometer-alt ml-2'></i> */}
                                <i className="fa-solid fa-check-to-slot fa-beat"></i>
                                <div className='counts'>54000</div>
                            </div>
                            <div className="col-4 col-sm-6 col-md-2 col-lg-3 col-xl-3 hCard">
                                <span className='card-title '>APPROVED APPLICATIONS</span>
                                {/* <i className='fas fa-tachometer-alt ml-2'></i> */}
                                <i className="fa-solid fa-check-to-slot fa-beat"></i>
                                <div className='counts  '>56000</div>
                            </div>
                            <div className="col-4 col-sm-6 col-md-2 col-lg-3 col-xl-3 hCard">
                                <span className='card-title'>REJECTED APPLICATIONS</span>
                                {/* <i className='fas fa-tachometer-alt ml-2'></i> */}
                                <i className="fa-solid fa-check-to-slot fa-beat"></i>
                                <div className='counts m-2'>100</div>
                            </div>
                        </div>
                        
                    </div>

                    {/* <div className="col-md-8 col-12 col-lg-8 bg-primary  ">
                    gggg 
                </div> */}
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 p-0" style={{ bottom:"0%"}}>
                    <div >
                        <Footer3/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userinfo;
