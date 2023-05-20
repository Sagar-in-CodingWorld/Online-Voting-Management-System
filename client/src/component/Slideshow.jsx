import React from 'react';
import '../stylesheet/Slideshow.css'

export default function Slideshow() {
  return (
    <>
      <section className='container-fluid'> 
        <div className='row'>
          <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12 slide slideimg'>


            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="slideimg" src="img/img6.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="slideimg" src="img/img8.jpeg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="slideimg" src="img/img3.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* </div>
        </div> */}


            <div className='marquee'>
              <div className='news bg-dange'>
                <img className='tag' src="img/img1.png" alt='newstag'></img>
              </div>
              <div className='text bg-primar'>
                <marquee className="mt-2">
                  List of Observers Deployed in Assembly Elections 2023:
                  List of Observers Deployed in Bye Elections 2023:
                  General Election to Legislative Assemblies of Meghalaya, Nagaland and Tripura, 2023 - Press Note- reg.:
                  Schedule for Bye-election to 1(one) Parliamentary Constituency of UT of Lakshadweep and 6 (Six) Legislative Assemblies of Arunachal Pradesh, Jharkhand, Tamil Nadu, West Bengal and Maharashtra– reg.:
                  Know Your Candidate' Mobile Application.
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
