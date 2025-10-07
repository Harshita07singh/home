import React from 'react'
import xIcon2 from '../assets/images/x-2.png';
import aboutImage from '../assets/images/about.png';
import aboutShape from '../assets/images/about-shape.png';
import icon1 from '../assets/images/icon.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import roundShape from '../assets/images/round.png';

// Import images

const about = () => {
  return (
    <div>
      <>
        <div className="about-section style-three pt-10 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="dreamit-section-title two text-center pb-20">
                  <div className="dreamit-section-sub-title">
                    <h5>
                      {" "}
                      <img src={xIcon2} alt="" />
                      How it Works
                    </h5>
                  </div>
                  <div className="dreamit-section-main-title res-align">
                    <h1 className="a11">Start Smart, Invest Better!</h1>
                  </div>
                  <div className="dreamit-section-content-text">
                    <p className="ptext res-align">
                      No trading experience? No problem. Our ready-made strategies
                      align with your goals, minimize risks with Loss Protection, and
                      offer a user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-10 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-box">
                  <div className="about-thumb">
                    {" "}
                    <img src={aboutImage} alt="" />
                    <div className="about-shape">
                      {" "}
                      <img src={aboutShape} alt="" />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-single-icon-box d-flex">
                  <div className="about-icon-thumb">
                    {" "}
                    <img src={icon1} alt="" />{" "}
                  </div>
                  <div className="about-content">
                    <h2>Easy Onboarding</h2>
                    <p>Register and verify in minutes.</p>
                  </div>
                </div>
                <div className="about-single-icon-box d-flex">
                  <div className="about-icon-thumb">
                    {" "}
                    <img src={icon2} alt="" />{" "}
                  </div>
                  <div className="about-content">
                    <h2>Smart Investments</h2>
                    <p>Fund your account and pick your index.</p>
                  </div>
                </div>
                <div className="about-single-icon-box d-flex">
                  <div className="about-icon-thumb">
                    {" "}
                    <img src={icon3} alt="" />{" "}
                  </div>
                  <div className="about-content">
                    <h2>Achieve More</h2>
                    <p>Grow your portfolio with confidence.</p>
                  </div>
                </div>
              </div>
              <div id="whyxpo" />
            </div>
            <div className="about-shape-one bounce-animate2">
              {" "}
              <img src={roundShape} alt="" />{" "}
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default about
