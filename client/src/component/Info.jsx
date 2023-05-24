import React from 'react'
import '../stylesheet/info.css'
import { NavLink } from 'react-router-dom'
// import { textAlign } from '@mui/system'

function Info() {
  return (
    <>
      <div className='container box mt-5'>
        <div className="row">
          <div className="col-12">
            <h2 className='h-com'>HON'BLE COMMISSION</h2><hr></hr>
          </div>
        </div>
        <div className='row my-4 '>
          <div className='col-12 col-lg-4 col-md-4 col-sm-4 col-xl-4' data-aos="zoom-in">
            <div className='card '>
              <div className='image' ><center><img className='col-6' src='/img/Rajiv.jpg' alt='Cer-rajiv-kumar'></img></center>
                <p className='c-name'>Sh.Rajiv Kumar</p></div>
              <p style={{ fontSize: '130%', fontStyle: 'italic', }}> Chief Election Commissioner</p>
              <span className='indentt'>Sh. Rajiv Kumar, Election Commissioner in ECI since 1st September 2020, took charge as the 25th Chief Election Commissioner on 15th May 2022. Prior to assuming charge in the Election Commission, Sh. Rajiv Kumar had been Chairman, Public Enterprises Selection Board. Sh. Rajiv Kumar, an officer of the Indian Administrative Service of Bihar/Jharkhand cadre 1984 batch, superannuated in February 2020.</span>
              <br />
              <span className='indentt'>Born on 19th February 1960 and acquiring academic degrees of B.SC, LL.B, PGDM and MA in Public Policy and Sustainability, Shri Rajiv Kumar brings with him vast experience of more than 36 years, having worked in various Ministries at the Centre and State across Social
                <NavLink className='read' to='/Readmore1'> Read More...</NavLink>
              </span>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-4 col-sm-4 col-xl-4' data-aos="zoom-in" data-aos-delay='100'>
            <div className='card '>
              <div className='image'><center><img className='col-6' src='img/acp.jpg' alt='Cer-rajiv-kumar'></img></center>
                <p className='c-name'>Anup C. Pandey</p></div>
              <p style={{ fontSize: '130%', fontStyle: 'italic' }}>Election Commissioner</p>
              <span className='indentt'>Shri Anup Chandra Pandey assumed charge as Election Commissioner (EC) of India on 9th June, 2021. Shri Pandey, an officer of Indian Administrative Service of 1984 batch, Uttar Pradesh cadre superannuated as Chief Secretary, Government of Uttar Pradesh in August 2019.
                During the span of about 37 years of distinguished Government of India service.</span><br />
              <span className='indentt'>Shri Pandey has worked in various Ministries & Departments at the Centre and his state cadre of Uttar Pradesh.
                As Chief Secretary, he has organized elections in 2019 in the State of Uttar Pradesh. He has worked as District Election Officer in two districts. He has been associated in various capacities as DEO and Returning
                <NavLink className='read' to='/Readmore2'> Read More...</NavLink>
              </span>
            </div>
          </div>

          <div className='col-12 col-lg-4 col-md-4 col-sm-4 col-xl-4' data-aos="zoom-in" data-aos-delay='200'>
            <div className='card mb-4' style={{ backgroundColor: '#C6EBC5' }}>

              <div className='image'><center><img className='col-6' src='img/aa.jpeg' alt='Arun Goel'></img></center>
                <p className='c-name'>Shri Arun Goel</p> </div>
              <p style={{ fontSize: '130%', fontStyle: 'italic' }}>Election Commissioner</p>
              <span className='indentt'>Shri Arun Goel assumed charge as Election Commissioner (EC) of India on 21st November, 2022. Shri Goel, an Indian Administrative Service officer of 1985 batch, Punjab cadre superannuated as Secretary, Ministry of Heavy Industry, Govt of India after more than 37 years of service.</span><br />
              <span className='indentt'>Born on 7th December 1962, at Patiala, he is M. Sc.(Mathematics) and was awarded Chancellors Medal of Excellence for being First Class First and Record Breaker throughout in all the examinations of Punjabi University. He is Post-Graduate with Distinction in Development Economics from Churchill College, University of Cambridge, England and has been trained at John F Kennedy School of Government, Harvard
                <NavLink className='read' to='/Readmore3'> Read More...</NavLink>
              </span>
            </div>
          </div> 



        </div>
      </div>
      {/* <div className='container box mt-5'>
        <h2>HON'BLE COMMISSION</h2>
        <div className='row'>
          <div className='col-12 col-lg-4 col-md-4 col-sm-4 col-xl-4'>
            <div className='card mt-4 mb-4' style={{ backgroundColor: '#C6EBC5' }}>
              <div className='image' ><img className='col-6' src='/img/Rajiv.jpg' alt='Cer-rajiv-kumar'></img>
                <p className='c-name'>Sh.Rajiv Kumar</p></div>
              <p style={{ fontSize: '130%', fontStyle: 'italic', }}> Chief Election Commissioner</p>
              <span className='indentt'>Sh. Rajiv Kumar, Election Commissioner in ECI since 1st September 2020, took charge as the 25th Chief Election Commissioner on 15th May 2022. Prior to assuming charge in the Election Commission, Sh. Rajiv Kumar had been Chairman, Public Enterprises Selection Board. Sh. Rajiv Kumar, an officer of the Indian Administrative Service of Bihar/Jharkhand cadre 1984 batch, superannuated in February 2020.
                  
                  <br/><br/>&ensp;Born on 19th February 1960 and acquiring academic degrees of B.SC, LL.B, PGDM and MA in Public Policy and Sustainability, Shri Rajiv Kumar brings with him vast experience of more than 36 years, having worked in various Ministries at the Centre and State across Social Sector, Environment & Forests, Human Resources, Finance and Banking sector.
                <NavLink to='/Readmore1'>Read More...</NavLink>
              </span>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-4 col-sm-4 col-xl-4' >
            <div className='card mt-4 mb-4' style={{ backgroundColor: '#C6EBC5'}} >
              <div className='image'><img className='col-6' src='img/acp.jpg' alt='Cer-rajiv-kumar'></img>
                <p className='c-name'>Anup C. Pandey</p></div>
              <p style={{ fontSize: '130%', fontStyle: 'italic' }}>Election Commissioner</p>
              <span>Shri Anup Chandra Pandey assumed charge as Election Commissioner (EC) of India on 9th June, 2021. Shri Pandey, an officer of Indian Administrative Service of 1984 batch, Uttar Pradesh cadre superannuated as Chief Secretary, Government of Uttar Pradesh in August 2019.

              <br/><br/>&ensp; During the span of about 37 years of distinguished Government of India service, Shri Pandey has worked in various Ministries & Departments at the Centre and his state cadre of Uttar Pradesh.
                <NavLink to='/Readmore2'>Read More...</NavLink>
              </span> 
            </div>

          <div className='col-12 col-lg-4 col-md-4 col-sm-4 col-xl-4'>
            <div className='card mt-4 mb-4' style={{ backgroundColor: '#C6EBC5' }}>

              <div className='image'><img className='col-6' src='img/aa.jpeg' alt='Arun Goel'></img>
                <p className='c-name'>Shri Arun Goel</p> </div>
              <p style={{ fontSize: '130%', fontStyle: 'italic' }}>Election Commissioner</p>
              <span>Shri Arun Goel assumed charge as Election Commissioner (EC) of India on 21st November, 2022.  Shri Goel, an Indian Administrative Service officer of 1985 batch, Punjab cadre superannuated as Secretary, Ministry at Patiala, he is M. Sc.(Mathematics) and was awarded Chancellors Medal of Excellence for being First Class First and Record Breaker throughout in all the examinations of Punjabi University.
              
              <br/><br/>&ensp;He is Post-Graduate with Distinction in Development Economics from Churchill College, University of Cambridge, England and has been trained at John F Kennedy School of Government, Harvard University, USA.

                <NavLink to='/Readmore3'>Read More...</NavLink>
              </span>
            </div>
          </div>



        </div>
      </div>
      </div> */}

    </>
  )
}

export default Info