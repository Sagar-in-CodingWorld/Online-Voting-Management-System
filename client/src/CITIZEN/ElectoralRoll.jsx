import React from 'react'
import TopmenuC from './TopmenuC';
import Card from './Card';
import Footer1 from '../component/Footer1';



const ElectoralRoll = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#efeefe" }}>
                <div className="row">
                    <div className="col-12 p-0">
                        <TopmenuC />
                        {/* <hr/> */}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center p-1 mt-5">
                        {/* <Form/> */}
                        <h1 className='center'>Electoral Roll</h1>
                        {/* <Card/> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <Footer1 />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ElectoralRoll