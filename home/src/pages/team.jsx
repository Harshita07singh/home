import React from 'react'
import xIcon from '../assets/images/x-2.png'
import IM1 from '../assets/images/IM1.png'
import IM10 from '../assets/images/IM10.png'
import IM11 from '../assets/images/IM11.png'
import IM12 from '../assets/images/IM12.png'
const team = () => {
  return (
    <div>
      <>
  <div id="team" />
  <div className="team-section style-four pt-110 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="dreamit-section-title two text-center pb-20">
            <div className="dreamit-section-sub-title">
              <h5>
                {" "}
                <img src={xIcon} alt="" /> Our Team
              </h5>
            </div>
            <div className="dreamit-section-main-title res-align">
              <h1> Our Index Managers </h1>
            </div>
            <div className="dreamit-section-content-text res-align">
              <p className="ptext res-align">
                The XPO Team combines a passion for esports, industry experise
                &amp; proven record in finance, development, marketing &amp;
                licensing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t .single-team-box-two {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n}\n\n.single-team-thumb {\n  position: relative;\n\topacity: 0.9;\n}\n\n.single-team-thumb img {\n  width: 100%;\n /* opacity: 0.5;*/\n  transition: opacity 0.3s ease, transform 0.3s ease;\n\theight: 190px;\n\tcursor: pointer;\n\tborder-radius: 8px;\n\t \n}\n\n.single-team-thumb:hover img {\n  \n  transform: scale(1.05);  \n}\n\n.overlay {\n \n\tposition: absolute;\n    bottom: 14px;\n    width: 50%;\n    height: 25%;\n    display: flex\n;\n    flex-direction: column;\n    justify-content: end;\n    align-items: center;\n    color: white;\n    background: #21407091;\n    opacity: 1;\n    z-index: 1;\n    transition: opacity 0.3s ease;\n    padding-bottom: 1px;\n    border-radius: 24px;\n    right: 60px;\n\tcursor: pointer;\n}\n \n\n.overlay span {\n  margin: 0;\n\topacity: 0.7;\n\tfont-size: 13px !important;\n}\n.overlay h3{font-size: 12px !important; line-height: 0.1; letter-spacing: 0.8}\n.single-team-thumb:hover .overlay {\n  opacity: 100%;\n  z-index: 999;  \n}\n\n\t \n\t\t  \n\t\t \n\t\t  \n\t\t.overlay  .cltext {\n  margin: 0 !important;\n\topacity: 0.7 !important;\n\tfont-size: 11px !important;\n}\n\t\t\n\t\t.dugu{opacity: 0.5;}\n\t\t.dugu:hover{opacity: 1;}\n\t\t\n\t\t\n\t\t@media screen and (max-width: 768px) {\t\n\t\t.overlay {\n    position: absolute;\n    bottom: 41px;\n    width: 35%;\n    height: 25%;\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: center;\n    color: white;\n    background: #21407091;\n    opacity: 1;\n    z-index: 1;\n    transition: opacity 0.3s ease;\n    padding-bottom: 1px;\n    border-radius: 24px;\n    right: 139px;\n\n}\n\t\t\n\t\t}\n\t\t\n\t\t\n\t@media screen and (max-width: 576px) {\t\n\t\t.overlay {\n    position: absolute;\n    bottom: 40px;\n    width: 35%;\n    height: 25%;\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: center;\n    color: white;\n    background: #21407091;\n    opacity: 1;\n    z-index: 1;\n    transition: opacity 0.3s ease;\n    padding-bottom: 1px;\n    border-radius: 24px;\n    right: 90px;\n}\n\t\t\n\t\t} \n\t  "
        }}
      />
      <div className="row pt-30 m-auto">
        <div className="col-lg-3 col-md-6 mb-4 tcenter ">
          <div className="single-team-box-two">
            <div className="single-team-thumb">
              {" "}
              <img src={IM1} alt="" className="dugu" />{" "}
            </div>
          </div>
          <div className="overlay">
            <h3>Vladlen Maslov</h3>
            <span>Deriva Forex Index</span>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 tcenter ">
          <div className="single-team-box-two">
            <div className="single-team-thumb">
              {" "}
              <img src={IM10} alt="" className="dugu" />{" "}
            </div>
          </div>
          <div className="overlay">
            <h3>Nikita Pirogov</h3>
            <span>Halloween Trade</span>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 tcenter ">
          <div className="single-team-box-two">
            <div className="single-team-thumb">
              {" "}
              <img src={IM11} alt="" className="dugu" />{" "}
            </div>
          </div>
          <div className="overlay">
            <h3>Alevtina Pavlova</h3>
            <span>Profit Magnet</span>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 tcenter ">
          <div className="single-team-box-two">
            <div className="single-team-thumb">
              {" "}
              <img src={IM12} alt="" className="dugu" />{" "}
            </div>
          </div>
          <div className="overlay">
            <h3>Ludmila Gorbunov</h3>
            <span>Dimond FX Index</span>{" "}
          </div>
        </div>
      </div>
      <div id="blog" />
    </div>
  </div>
</>

    </div>
  )
}

export default team
