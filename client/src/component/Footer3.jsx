import React from 'react'

export const Footer3 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center p-0" style={{ backgroundColor: '#FFFBE9',bottom: "0%" , fontSize: '0.8rem' }}>
            {/* <div className='float-center'> */}
              <p className='mb-0 mt-3'><span style={{ fontWeight: '500' }}>Designed & Developed by <span style={{ color: '#007BFF' }}>SSPP</span></span>. All rights reserved</p>

            {/* </div> */}
            <div className='float-right mr-1'>
              <span style={{ textAlign: 'right' }}>Version</span><span>1.0.0</span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
