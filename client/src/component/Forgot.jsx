import React from "react";
import '../stylesheet/Forgot.css';
import { NavLink } from "react-router-dom";

const Forgot = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12  forgot-app">
                        <div className="col-12 col-lg-5 col-md-8 col-sm-4 forgot-page bg-success p-2">
                            <div className="forgot-body ">
                                <div className="logo pt-2">
                                    <i className="fa-solid fa-circle-exclamation fa-3x"></i>
                                </div>
                                <div className="sp pt-1">
                                <span>Reset Password</span>
                                <p>Enter your last remember password and also enter your registered email to reset your password</p>
                                </div>
                                <div className="body">
                                    <form>
                                        <label><i className="fa-solid fa-envelope fa-2x"></i></label><br/>
                                        <input type="text" placeholder="Enter mail"></input><br/>
                                        <label><i className="fa-solid fa-lock fa-2x"></i></label><br/>
                                        <input type="text" placeholder="Enter old password"></input>
                                    </form>
                                </div>
                                <div className="btnn">
                                <input type="submit" className='btn btn-outline-danger mt-4'/>
                                </div>
                                <div className="nav pt-2">
                                    <NavLink to="/Login"> Back to Login </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgot;