import React, { useEffect, useRef, useState } from "react";
import "./stylesheet/Candidate.css";
import { Sidebar } from '../Sidebar';
import { NavLink } from 'react-router-dom';
import { Timer } from "../Timer";
import { Footer3 } from "../Footer3";
import { CanceledError } from "axios";
import { candidate, candidateIndex } from "../../service/api";
import axios from "axios"

const Candidate = () => {

    // const [fullName, setFullName] = useState({ cdFName: "", cdLName: "" });
    const [user, setUser] = useState({});

    const fileData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.files[0] })
        console.log(user)
    }
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
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);
    const inputRef7 = useRef(null);
    const inputRef8 = useRef(null);
    const inputRef9 = useRef(null);
    const inputRef10 = useRef(null);
    const inputRef11 = useRef(null);
    const inputRef12 = useRef(null);
    const inputRef13 = useRef(null);

    const addUserDetails = async (e) => {
        e.preventDefault();
        const { cdname,gender,gname,relation,mobile,email,epicNumber,dob,address,city,state,zip,partyName,partyIndex} = user

        if (!cdname) {
            alert("Enter Candidate Name !");
            inputRef.current.focus();
        } else if (!gender) {
            alert("Enter gender !");
            inputRef1.current.focus();
        } else if (!gname) {
            alert("Enter Guardian name !");
            inputRef2.current.focus();
        } else if (!relation) {
            alert("Enter relation");
            inputRef3.current.focus();
        } else if (!mobile) {
            alert("Enter Mobile Number");
            inputRef4.current.focus();
        } else if (!epicNumber) {
            alert("Enter Epic Number !");
            inputRef5.current.focus();
        } else if (!email) {
            alert("Enter email !");
            inputRef6.current.focus();
        } else if (!dob) {
            alert("Enter dob!");
            inputRef7.current.focus();
        } else if (!address) {
            alert("Enter address!");
            inputRef8.current.focus();
        } else if (!city) {
            alert("Enter city!");
            inputRef9.current.focus();
        } else if (!state) {
            alert("Enter state!");
            inputRef10.current.focus();
        } else if (!zip) {
            alert("Enter zip!");
            inputRef11.current.focus();
        } else if (!partyName) {
            alert("Enter partyname!");
            inputRef12.current.focus();
        } else if (!partyIndex) {
            alert("Enter partyindex!");
            inputRef13.current.focus();
        } else {
        const formData = new FormData()
        formData.append('partyIndex', user.partyIndex, user.partyIndex.name)
        formData.append('partyName', user.partyName)
        formData.append('cdname', user.cdname)
        formData.append('gender', user.gender)
        formData.append('gname', user.gname)
        formData.append('relation', user.relation)
        formData.append('mobile', user.mobile)
        formData.append('email', user.email)
        formData.append('epicNumber', user.epicNumber)
        formData.append('dob', user.dob)
        formData.append('address', user.address)
        formData.append('city', user.city)
        formData.append('state', user.state)
        formData.append('zip', user.zip)
        console.log("This is Form Data");
        console.log(formData);
        const res = await candidate(formData);
        // alert("Success")
        if (res.status === 201) {
            alert("Candidate Successfully Added");
            // window.location.reload();
        } else {
            alert("Something went Wrong Try Again");
        }
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
                                    <input autoFocus required type="text" ref={inputRef} name='cdname' onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label >Gender</label>
                                    <select required name="gender" ref={inputRef1} onChange={(e) => onValueChange(e)} className="form-control">
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
                                    <input required type="text" name='gname' ref={inputRef2} onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Relationship</label>
                                    <select required name='relation' ref={inputRef3} onChange={(e) => onValueChange(e)} className="form-control">
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
                                    <input required type="number" name="mobile" ref={inputRef4}  onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Email Id</label>
                                    <input required type="email" name="email" ref={inputRef6} onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <label>Epic Number</label>
                                    <input required type="text" name="epicNumber" ref={inputRef5} onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Date of Birth</label>
                                    <input required type="date" name="dob" ref={inputRef7} onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                            </div>

                            {/* <div className="form-group">
                                <label>Upload Candidate's image</label>
                                <input required type="file" name="cdimage" onChange={(e) => fileData(e)} className="form-control" />
                            </div> */}
                            <div className="form-group">
                                <label>Address</label>
                                <input required type="text" name="address" ref={inputRef8} onChange={(e) => onValueChange(e)} className="form-control" placeholder=" i.g. 1234 Main Street" />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >City</label>
                                    <input required type="text" name="city" ref={inputRef9} onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label >State</label>
                                    <select required name="state" ref={inputRef10} onChange={(e) => onValueChange(e)} className="form-control">
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
                                    <input required type="number" name="zip" ref={inputRef11} onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <label>Party Name</label>
                                    <input required type="text" name="partyName" ref={inputRef12} onChange={(e) => onValueChange(e)} className="form-control" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Upload Party-index image</label>
                                    <input required type="file" name="partyIndex" ref={inputRef13} onChange={(e) => fileData(e)} className="form-control" />
                                </div>
                            </div>
                            {/* <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <label>Party Name</label>
                                    <input required type="text" name="partyName" onChange={(e) => onValueChange(e)} className="form-control"/>
                                </div>
                                <div className="form-group col-sm-6">
                                    <label>Party Index</label>
                                    <input required type="file" name="partyImage" onChange={(e) => fileData(e)} className="form-control" />
                                </div>
                            </div> */}
                            <div className="form-row justify-content-center">
                                <div className="form-group col-3">
                                    {/* <button type="submit" onClick={addUserDetails} className="form-control btn btn-primary">Add Candidate</button> */}

                                    <input type="button" onClick={addUserDetails} className="form-control btn btn-primary" value="Add Candidate"></input>
                                </div>
                                <div className="form-group col-3">
                                    <button type="reset" className="form-control btn btn-danger">Reset</button>
                                </div>
                            </div>

                        </form>
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

export default Candidate;