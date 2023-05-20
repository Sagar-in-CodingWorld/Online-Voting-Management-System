import React from 'react';
import { SidebarC } from './SidebarC';
import '../CITIZENCSS/Home.css'
// import Footer from './Footer';
import TopmenuC from './TopmenuC';
import Form from './FORM/Form';
import Card from './Card';
import Footer1 from '../component/Footer1';

function Home() {
    return (
        <>
            <div className="container-fluid" style={{backgroundColor: "#efeefe"}}>
                <div className="row">
                    <div className="col-12 p-0">
                        <TopmenuC/>
                        {/* <hr/> */}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center p-1 mt-5">
                        {/* <Form/> */}
                        <Card/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <Footer1/>
                    </div>
                </div>




                {/* 
                
                <div className="row mt-3">
                    <div className="col-12 col-sm-3 col-md-2 col-lg-3 col-xl-3 p-0 sidebar-window bg-warning">
                        <SidebarC/>
                    </div>
                    <div className=" col-12 col-sm-9 col-md-10 col-lg-9 col-xl-9 p-0 bg-primary">
                        <Card/>
                    </div>
                   
                    <div className="col-12 p-0">
                        <Footer/>
                    </div>
           
              
                </div> 
                
                */}
                
               
                 
               
            </div>

        </>
    )
}

export default Home