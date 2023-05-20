import React, { useEffect, useRef, useState } from "react";
// import '../stylesheet/Admin.css';
// import ".../stylesheet/Admin.css";
import "./stylesheet/Candidate.css";
import { Sidebar } from '../Sidebar';
import { NavLink } from 'react-router-dom';
import { Timer } from "../Timer";
import { Footer3 } from "../Footer3";
import { candidate } from "../../service/api";

const Candidate = () => {

    // const [fullName, setFullName] = useState({ cdFName: "", cdLName: "" });
    const [user, setUser] = useState({});

    function onValueChange(e) {

        // console.log(fullName)    
        // const cdNameIs = fullName.cdFName + " " + fullName.cdLName;
        // setUser({...user,cdName: cdNameIs })
        // console.log(fullName)
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }


    // useEffect(() => {
    //     const cdNameIs = fullName.cdFName + " " + fullName.cdLName;
    //     setUser({ ...user, cdName: cdNameIs })
    // }, [user])

    const addUserDetails = async (e) => {

        e.preventDefault();

        // const cdNameIs = fullName.cdFName + " " + fullName.cdLName;
        // setUser({cdName: cdNameIs })
        // setUser({ ...user, cdName: cdNameIs })
        // const cdNameIs = fullName.cdFName + " " + fullName.cdLName;
        // setUser({...user,cdName: cdNameIs })
        // console.log(fullName);
        console.log(user);


        const res = await candidate(user);
        if (res.status === 201) {
            alert("Doctor Successfully Added");
            // window.location.reload();
        } else {
            alert("Something went Wrong Try Again");
        }
    }



    // await candidate(user);
    // console.log(user); 

    // }
    function hideMenu() {
        if (document.getElementById("side-menu").style.display !== 'none') {
            document.getElementById("side-menu").style.display = "none";
        } else {
            document.getElementById("side-menu").style.display = "flex";

        }
    }

    function expand() {
        if (document.getElementById('search-box').style.display === "none") {
            document.getElementById("search-box").style.display = "block";
            // document.getElementById("search-icon").style.backgroundColor = "black";
            document.getElementById("search-icon").style.fontSize = "0px";

        } else {

        }
        // let pendingAppCount = {select * from table pendingApplication};
        // document.getElementsById('PA')= pendingAppCount;
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
                                <NavLink to='/verify-electors/elector-registration' id='path'>/verify-electors --- elector-registration</NavLink>
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
                                {/* <div className="right-bottom-bar bg-secondar">
                                    <form>
                                        <table className='table table-responsive bg-warnin'>
                                            <tr>
                                                <td><input type="search" name="search" placeholder='Search...' id='search-box' className='form-control' /></td>
                                                <td><i onClick={expand} id="search-icon" className='fas fa-search'></i></td>
                                            </tr>
                                        </table>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pr-3">
                    <div id="side-menu" className="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 side-menu p-3">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-sm-7 col-md-9 col-lg-9 col-xl-10 cand-form pt-4">
                        <form>
                            <div className="text-center mb-5">
                                <h4 style={{ fontFamily: "redo" }}>CANDIDATE FORM</h4>
                                <hr />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <label>Full Name</label>
                                    <input autoFocus required type="text" name='cdName' onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label >Gender</label>
                                    <select required name="gender" onChange={(e) => onValueChange(e)} className="form-control">
                                        <option hidden selected value="">Choose...</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col-sm-6">
                                    <label >Guardian Name</label>
                                    <input required type="text" name='gName' onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Relationship</label>
                                    <select required name='relation' onChange={(e) => onValueChange(e)} className="form-control">
                                        <option selected hidden>Choose...</option>
                                        <option value="Father">Father</option>
                                        <option value="Mother">Mother</option>
                                        <option value="Husband">Husband</option>
                                        <option value="Wife">Wife</option>
                                        <option value="Legal Guardian">Legal Guardian</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <label>Mobile Number</label>
                                    <input required type="number" name="mobile" onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Email Id</label>
                                    <input required type="email" name="email" onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <label>Epic Number</label>
                                    <input required type="text" name="epicNumber" onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Date of Birth</label>
                                    <input required type="date" name="dob" onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input required type="text" name="address" onChange={(e) => onValueChange(e)} className="form-control" placeholder=" i.g. 1234 Main Street" />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >City</label>
                                    <input required type="text" name="city" onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label >State</label>
                                    <select required name="state" onChange={(e) => onValueChange(e)} className="form-control">
                                        <option selected disabled>Choose...</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="West Bengal" >West Bengal</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input required type="number" name="zip" onChange={(e) => onValueChange(e)} className="form-control" id="inputZip" />
                                </div>
                            </div>
                            <div className="form-row justify-content-center">
                                <div className="form-group col-3">
                                {/* <button type="submit" onClick={addUserDetails} className="form-control btn btn-primary">Add Candidate</button> */}

                                    <input type="button" onClick={addUserDetails} className="form-control btn btn-primary" value="Add Candidate"></input>
                                </div>
                                <div className="form-group col-3">
                                    <button type="reset" className="form-control btn btn-danger">Reset</button>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div> */}
                            </div>
                        </form>
                    </div>









                    {/* <div className="col-12 col-md-9 col-lg-9 col-sm-4 antu">

                        <div className="body" id="cd-form-area">
                            <form>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="cd-form">
                                                <h4 className="text-center pt-2">Add Candidate</h4><hr></hr>

                                                <div className="row form-area">
                                                    <div className="col-12 col-md-4">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>Name <span style={{ color: 'red' }}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='text' name="cdname" ref={inputRef} className="form-control" placeholder="Enter Your Name" onChange={(e) => onvaluechange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>Mobile Number <span style={{ color: 'red' }}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='number' name="cdnum" ref={inputRef1} className="form-control" placeholder="Enter Mobile Number" onChange={(e) => onvaluechange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>Email Id <span style={{ color: 'red' }}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='email' name="mail" ref={inputRef2} className="form-control" placeholder="Enter Your Email Id" onChange={(e) => onvaluechange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="row form-area">
                                                    <div className="col-12 col-md-4">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>District <span style={{ color: 'red' }}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='text' name="cddis" ref={inputRef3} className="form-control" placeholder="Enter District" onChange={(e) => onvaluechange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>Legislative Assembly <span style={{ color: 'red' }}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='text' name="cdla" ref={inputRef4} className="form-control" placeholder="Enter Legislative Assembly" onChange={(e) => onvaluechange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <table className="table table-responsive">
                                                            <tr>
                                                                <td>Party Name<span style={{ color: 'red' }}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='text' name="party" ref={inputRef5} className="form-control" placeholder="Enter party name" onChange={(e) => onvaluechange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="btn-submit">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <button type="reset" name="ok" className="btn btn-outline-danger">Reset</button>
                                                                        <NavLink to='' onClick={(e) => addUserDetails(e)}><button type="submit" name="ok" className="btn btn-outline-primary ml-2">Submit</button></NavLink>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> */}
                    {/* <div className="col-md-8 col-12 col-lg-8 bg-primary  ">
                    gggg 
                </div> */}
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

export default Candidate;