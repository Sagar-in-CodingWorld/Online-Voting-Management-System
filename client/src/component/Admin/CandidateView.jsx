import React, { useEffect, useRef, useState } from "react";
// import '../stylesheet/Admin.css';
// import ".../stylesheet/Admin.css";
import "./stylesheet/Candidate.css";
import { Sidebar } from '../Sidebar';
import { NavLink } from 'react-router-dom';
import { Timer } from "../Timer";
import { Footer3 } from "../Footer3";
import { deleteCandidate, getCandidate } from "../../service/api";

const CandidateView = () => {
    const [candidate, setCandidate] = useState([]);

    useEffect(() => {
        fetchAllCandidate();
    });

    const fetchAllCandidate = async () => {
        let res = await getCandidate();
        setCandidate(res.data)

    }
    const deleteButton = async (e) => {
        // console.log(e)
        const res = await deleteCandidate({ id: e })
        if (res.status === 201) {
            alert('Successfully deleted')
        } else (
            alert('sonethig is wrong')
        )
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
                                <NavLink to="/" id="path">Home</NavLink>
                                <NavLink to="/admin" id="path">/Dashboard</NavLink>
                                <NavLink to='/view-candidate-details' id='path'>/View--Candidate</NavLink>
                                {/* <div>
                               <button onClick={hideMenu}>Click Me</button>
                            </div> */}

                            </div>
                            <div className="col-3 widgets bg-warnin p-2">
                                <div className="right-top-bar">
                                    <div className="timer"><Timer /></div>
                                </div>
                                <div className="right-bottom-bar mt-2">
                                    <NavLink to='' id='log-out-nav'>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <span className='log-out-text m-1'>Log out</span>
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pr-3">
                    <div id="side-menu" className="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 side-menu p-3">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-sm-7 col-md-9 col-lg-9 col-xl-10 cand-form pt-4">
                        <div className="mb-5">
                            <h4 style={{ fontFamily: "redo" }}>CANDIDATE DETAILS</h4>
                            {/* <hr /> */}
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Sl No.</th>
                                        <th>Name</th>
                                        <th>Guardian Name</th>
                                        <th>Mobile No</th>
                                        <th>Epic Number</th>
                                        <th>City</th>
                                        <th>Party Name</th>
                                        <th>Party Index</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        candidate.map((cd, key) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{key += 1}</td>
                                                        <td>{cd.cdname}</td>
                                                        <td>{cd.gname}</td>
                                                        <td>{cd.mobile}</td>
                                                        <td>{cd.epicNumber}</td>
                                                        <td>{cd.city}</td>
                                                        <td>{cd.partyName}</td>
                                                        <td>
                                                            <img src={`http://localhost:8000/uploads/${cd.partyIndex}`} alt="party-logo" width="50px" height='50px' />

                                                        </td>
                                                        <td>
                                                            <NavLink to='' className="action-btn"><i className="fas fa-edit"></i></NavLink>
                                                            <NavLink to="" className="action-btn ml-2" style={{ backgroundColor: '#F94892' }}><i className="fas fa-eye"></i></NavLink>
                                                            <NavLink to="" onClick={() => { deleteButton(`${cd._id}`) }} className="action-btn mt-4" style={{ backgroundColor: '#D2001A', padding: '5px 9px',position : 'absolute',zIndex: "1",marginLeft: '-55px' }}><i className="fas fa-trash"></i></NavLink>
                                                        </td>

                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>



                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 p-0 mt-5" style={{ bottom: "0%" }}>
                    <div >
                        <Footer3 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidateView;