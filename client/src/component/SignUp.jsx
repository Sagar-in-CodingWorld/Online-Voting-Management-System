import React, { useState } from 'react'
import "../stylesheet/SignUp.css";
import { NavLink } from 'react-router-dom';
import { addUser } from '../service/api';

function SignUp() {
    const defaultValue = {
        name: '',
        email: '',
        mobile: '',
        username: "",
        password: ""
    }
    const [user, setUser] = useState(defaultValue);
    function onValueChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }
    const addUserDetails = async () => {
        if(user.password !== user.cPassword){
            alert("Confirm password did''nt match")
        }else{
            await addUser(user);
            alert("Sign up successfully Save")
            console.log(user);
        }
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 first p-0'>
                        <div className='col-11 col-sm-11 col-md-7 col-lg-4 col-xl-3 child-div'>
                            <p className='sing-heading'>Sign up</p>
                            <div className='logo-div'>
                                <i className="fa-solid fa-user"></i>
                                {/* <img className='logo' src='user.webp'></img><br></br> */}
                            </div>
                            {/* <label className='name'>Name*</label><br></br> */}
                            <input type='text' name='name' onChange={(e) => onValueChange(e)} className='form-control input-nam' placeholder='Enter Name'></input><br></br>

                            {/* <label className='name'>Email ID*</label><br></br> */}
                            <input type='email' name='email' onChange={(e) => onValueChange(e)} className='form-control input-nam' placeholder='Enter Email Id'></input><br></br>

                            {/* <label className='name'>Mobile Number*</label><br></br>  */}
                            <input type='number' name='mobile' onChange={(e) => onValueChange(e)} className='form-control input-nam' placeholder='Enter Mobile Number'></input><br></br>

                            <input type='text' name='username' onChange={(e) => onValueChange(e)} className='form-control input-nam' placeholder='Set Username'></input><br></br>
                            <input type='password' name='password' onChange={(e) => onValueChange(e)} className='form-control input-nam' placeholder='Set Password'></input><br></br>
                            <input type='password' name='cPassword' onChange={(e) => onValueChange(e)} className='form-control input-nam' placeholder='Confirm Password'></input><br></br>

                            {/*<button className='form-control btn btn-outline-success'>Send OTP</button>*/}

                            {/* <label className='name'>Otp*</label><br></br> */}
                            {/*<input type='text' name='otp' placeholder='Enter OTP' className='form-control mt-3'></input><br></br>*/}

                            <button onClick={addUserDetails} className='btn btn-outline-success form-control p-0 input-nam'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp