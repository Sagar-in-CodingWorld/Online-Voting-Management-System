import '../stylesheet/Homepage.css'
import React from 'react'
import {Topmenu } from './Topmenu' 
import Info from './Info'
import Slideshow from './Slideshow'
import Footer1 from './Footer1'
// import Footer from './Footer'
// import { Admin } from './Admin';

export const Homepage = () => {
  return (
    <div className='homepage'>
        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-12 bg-primary"> */}
                

                    <Topmenu/>
                    <Slideshow/>
                    <Info/>
                    <Footer1/>
                    {/* <Admin/> */}  
                    {/* <Bottommenu/> */}
                {/* </div>
            </div>
        </div> */}

    </div>
  )
}
