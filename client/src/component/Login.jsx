import React, { useState } from "react";
// import '../css/Login.css'
import '../stylesheet/Login.css'
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const user = 'user';
  // const pass = "0000";
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [initValue, setInitValue] = useState("");
  function login() {


    // console.log(user, pass);
    // if (userId === user && password === pass) {
    //   console.log("Authenticate Success");
    //   alert('Authentication Success')
    //   navigate('/citizen')
    // } else {
    //   console.log("Unauthorized Access Denied");
    //   alert('Unauthorized Access Denied')
    // }

  }
  return (
    <div className="login-body">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 login-app ">
            <div className="col-12 col-md-11 col-sm-11 col-lg-8 login-page p-2  ">
              <div className="descriptions">
                <img className='mt-' src="/ecb.jpg" alt="logo" style={{}} />
                <p className='mt-'>
                  Welcome To Online Voting
                </p>
              </div>
              <div className="login-main ">
                <h1>Login</h1>
                <form>
                  <input type="text" autoFocus onChange={(e) => setUserId(e.target.value)} placeholder='username/mobile no.' name="username" className='form-control mt-5' />

                  <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' name="password" className='form-control mt-2 pass' />
                  <div className="row ">
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 mt-4 btns">
                      <button type="button" onClick={login} className='btnn btn-outline-primary'>Submit</button>

                      <input type="reset" className='btnn btn-outline-danger' />

                    </div>

                  </div>

                </form><br />
                <NavLink className="mt-3" style={{ fontSize: "0.8rem", textDecoration: 'none' }} to="/Forgot">Forgot Password?</NavLink>
                <span className="" style={{ fontSize: "0.8rem" }}>Haven't Registered Yet?<NavLink to="/sign-up" style={{ textDecoration: 'none' }}> Click Here</NavLink></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;