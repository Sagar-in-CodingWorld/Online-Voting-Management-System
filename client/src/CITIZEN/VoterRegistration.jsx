import React from 'react'
import Form from './FORM/Form'
import Footer1 from '../component/Footer1'
import TopmenuC from './TopmenuC'

const VoterRegistration = () => { 
  return (
    <>
            <div className="container-fluid" style={{backgroundColor: "#eee"}}>
                <div className="row">
                    <div className="col-12 p-0">
                        <TopmenuC/>
                        {/* <hr/> */}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center p-1 mt-5">
                        <Form/>
                        {/* <Card/> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <Footer1/>
                    </div>
                </div>
            </div>

        </>
  )
}

export default VoterRegistration