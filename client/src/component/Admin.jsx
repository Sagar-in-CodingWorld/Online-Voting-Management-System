import React from 'react';
import '../stylesheet/Admin.css';
import { Sidebar } from './Sidebar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Timer } from './Timer';
import { Footer3 } from './Footer3';
import Body from './Body'; 
export const Admin = () => {
    const navigate = useNavigate()
    // var flag = 'false';
    // if (flag === 'true'){
    //     console.log("Authentication Success")
    // }else{
    //     console.warn('Login required')
    //     navigate('/admin/login')
    // }

    
    // function expand() {
    //     if (document.getElementById('search-box').style.display = "none") {
    //         document.getElementById("search-box").style.display = "block";
    //         // document.getElementById("search-icon").style.backgroundColor = "black";
    //         document.getElementById("search-icon").style.fontSize = "0px";

    //     } else {

    //     }
    // }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 top-header">
                        {/* <div className='icon icon-offline'></div> */}
                        <div className="row pt-2">
                            {/* <div className="col-1"></div> */}
                            <div className="col-9 path bg-primar">
                                <NavLink to="/" id="path" style={{ color: 'black' }}>Home</NavLink>
                                <NavLink to="/admin" id="path" style={{ color: 'black' }}>/Dashboard</NavLink>
                            </div>
                            <div className="col-3 widgets bg-warnin p-2">
                                <div className="right-top-bar">
                                    <div className="timer">
                                        <Timer /> 
                                    </div>
                                </div>
                                <div className="right-bottom-bar  mt-2">
                                    <NavLink to='' id='log-out-nav'>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <span className='log-out-text m-1'>Log out</span>
                                    </NavLink>
                                </div>


                                {/* <div className="right-bottom-bar bg-secondary">
                                    <form>
                                        <table className='table table-responsive bg-warnin'>
                                            <tr>
                                                <td><input type="search" name="search" placeholder='Search...' id='search-box' className='form-control' /></td>
                                                <td><i onClick={expand} id="search-icon" className='fas fa-search' style={{color:'black'}}></i></td>
                                            </tr>
                                        </table>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-5 col-md-2 col-lg-3 col-xl-2 side-menu p-3">
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
                        {/* <div className="row mt-4">
                            <div className="col-12">
                        
                                <table className='table'>
                                    <thead className='thead-light'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Name</th>
                                            <th>Name</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody> 
                                        <tr>
                                            <td>Alfreds Futterkiste</td>
                                            <td>Maria Anders</td>
                                            <td>Germany</td>
                                        </tr>
                                        <tr>
                                            <td>Centro comercial Moctezuma</td>
                                            <td>Francisco Chang</td>
                                            <td>Mexico</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> */}
                        <div className='row'>
                            <div className='col-12 col-lg-10 col-md-10 p-0 m-0'>
                                <div className='body'>
                                    <Body />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-8 col-12 col-lg-8 bg-primary  ">
                    gggg 
                </div> */}
                </div> 
            </div>
            <div className="row m-0">
                <div className="col-12 p-0 mt-5" style={{bottom: "0%" }}>
                    <div>
                        <Footer3 />
                    </div>
                </div>
            </div>
        </>
    )
}
