import React, { useState } from 'react'
import '../stylesheet/LoginA.css'
import {useNavigate } from 'react-router-dom';

const LoginA = () => {
    const navigate = useNavigate();
    const UserId = 'admin';
    const Password = '0000';
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    function logIn() {
        if(userId === UserId && password === Password){
            alert('Authentication Success')
            console.log(userId, password);
            navigate('/admin')
        }else{
            alert('Unauthorized Access Denied')
        }
        
    }
    // let flag = 'true';
    return (
        <>
            <div className="container-fluid login-card-back">
                <div className="row d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="col-12 col-sm-7 col-md-5 col-lg-4 col-lx-5 py-4 login-card">
                        <div className="row d-flex justify-content-center align-items-start text-center">
                            <div className="col-12 bg-primar mt-4 d-flex justify-content-center ">
                                <img src="/admin.jpg" alt="admin-logo" width='20%' />
                            </div>
                            <div className="col-12 bg-secondar pb-5">
                                <h3>Administrator</h3>
                            </div>
                            <div className="col-10 inputs">
                                <form>
                                    <input type="text" autoFocus onChange={(e) => setUserId(e.target.value)} placeholder='@Username' className='form-control m-2 ' />
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='form-control m-2' />
                                    <button type='button' onClick={logIn} className='btn btn-outline-success form-control m-2 my-3'>Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginA