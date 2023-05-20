import React from "react";
import { NavLink } from "react-router-dom";
import '../stylesheet/About.css'

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 back p-0 m-0 ">
            <img src="about.jpg" alt="about" height="500px" width="100%" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div className="top">
              <li>
                <NavLink to='/citizen'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/About'>About</NavLink>
              </li>
              {/* <li>
                <NavLink to='/Login'>Login</NavLink>
              </li> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 md-5 sm-3 p-0">
            <div className="yoyo">

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 md-5 sm-3 p-0 m-0">
            <div className="para">
              <p>
                India is a Socialist, Secular, Democratic Republic and the largest democracy in the World. The modern Indian nation state came into existence on 15th of August 1947. Since then free and fair elections have been held at regular intervals as per the principles enshrined in the Constitution, Electoral Laws and System.
              </p>
              <p>
                The Constitution of India has vested in the Election Commission of India the superintendence, direction and control of the entire process for conduct of elections to Parliament and Legislature of every State and to the offices of President and Vice-President of India.
              </p>
              <p>
                Election Commission of India is a permanent Constitutional Body. The Election Commission was established in accordance with the Constitution on 25th January 1950. The Commission celebrated its Golden Jubilee in 2001.
              </p>
              <p>
                Originally the commission had only a Chief Election Commissioner. It currently consists of Chief Election Commissioner and two Election Commissioners.
                For the first time two additional Commissioners were appointed on 16th October 1989 but they had a very short tenure till 1st January 1990. Later, on 1st October 1993 two additional Election Commissioners were appointed. The concept of multi-member Commission has been in operation since then, with decision making power by majority vote.
              </p>
              <p>
                The Commission has a separate Secretariat at New Delhi, consisting of about 300 officials, in a hierarchical set up.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 md-3 lg-6 sm-2 menu p-0 m-0 ">
            <div className="imp m-0 p-0">
              <h3>Other Important Links</h3>
            </div>
            <div className="link">
              <nav>
                <ul>
                  <li><a href="https://eci.gov.in/"><button type="button" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i> link to state/UT CEO's</button></a></li>
                  <li><NavLink to='/' className="nav"><button type="button" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i> New Voters Portal</button></NavLink></li>
                  <li><NavLink to='/' className="nav"><button type="button" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i> Honorable Commission</button></NavLink></li>
                  <li><NavLink to='/' className="nav"><button type="button" className="btn btn-primary"><i className="fa-solid fa-circle-info"></i> Voter Login</button></NavLink></li>
                </ul>
              </nav>
            </div>
            <div className="contact">
              <h3><u>Contact Us</u></h3>
              <p>For details of eligibility criteria or any other additional information related to electoral forms, kindly visit</p>
              <a href="https://eci.gov.in/">https://eci.gov.in/</a>
              <p>For any other technical feedback or issues on the portal kindly send your feedback to ECI Technical Support</p>
              <p><i className="fa-solid fa-phone-volume"></i> Toll free Number :1800111950</p>
            </div>
            <div className="other">
              <h4><u>Other Links</u></h4>
              <NavLink to='/Result'>Election Commission of India</NavLink><br /><br />
              <NavLink to='/Result'>chief Electorial Officer</NavLink>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About;

{/* <img src="vote.jpg" alt="vote" height="150px" width="200px"/><br/>
                     <p>
                        Welcome to Online Voting
                     </p>
                     <span>
                        just like we vote physically,here we can do it virtually
                        The platform is made the task easy and save time Here
                        everything is done exactly like it is done in a traditional
                        method but online.
                     </span> */}