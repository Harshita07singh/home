import one from '../assets/images/one.png'
import two from '../assets/images/two.png'
import three from '../assets/images/three.png'
// import four from '../assets/images/four.png'
import five from '../assets/images/five.png'

const slider = () => {
  return (
    <div>
      <div className="slider-area style-five d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="slider-content">
                <h4
                  className="wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp"
                  }}
                >
                  <span className="other xsty" /> One step solution for all investment
                </h4>
                <h1
                  className="wow fadeInUp pb-2"
                  data-wow-delay=".4s"
                  style={{
                    fontWeight: "normal !important",
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp"
                  }}
                >
                  Your Gateway to <span className="font-weight-bold">FOREX, CFD</span>{" "}
                  and<span className="font-weight-bold"> CRYPTOCURRENCY </span>Mutual
                  Index Funds!
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-delay=".6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp"
                  }}
                >
                  A smart platform for diversified, expert-managed investments in
                  Forex, CFDs, and cryptocurrencies.
                </p>
                <div
                  className="slider-button wow fadeInUp mdis"
                  data-wow-delay=".8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInUp"
                  }}
                >
                  {" "}
                  <a href="#">
                    <i className="fa fa-user" aria-hidden="true" /> Sign up Now
                  </a>{" "}
                </div>
                <div
                  className="slider-btn wow fadeInUp"
                  data-wow-delay=".9s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.9s",
                    animationName: "fadeInUp"
                  }}
                >
                  {" "}
                  <a href="#">
                    {" "}
                    <i className="flaticon-play-arrow"> </i> How It Works
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-thumb">
                <img src={one} alt="" />
                <div className="hero-shape rotatemeTwo">
                  {" "}
                  <img src={five} alt="" />{" "}
                </div>
                <div className="hero-shape3 rotateme">
                  {" "}
                  <img src={two} alt="" />{" "}
                </div>
                <div className="hero-shape4">
                  <div className="total-bg">
                    <div className="coundown-title-two">
                      <h4>Active Client</h4>
                    </div>
                    <div id="countdown-two">
                      <div className="top-trade-text2">4,421,746</div>
                    </div>
                  </div>
                </div>
                <div className="hero-shape5">
                  {" "}
                  <img src={three} alt="" />
                </div>
                <div className="hero-shape7 ">
                  <div className="total-bg">
                    <div className="coundown-title-two">
                      <h4>Total Funds Traded</h4>
                    </div>
                    <div id="countdown-two">
                      <div className="top-trade-text">$3,987,662,014</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area1 total-bg">
                  <div className="coundown-content">
                    <div className="coundown-title-two">
                      <h4>Partners Earned</h4>
                    </div>
                    <div id="countdown-two" className="">
                      <div className="top-trade-text1 mx-3">$2,218,313,042</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-one bounce-animate3">
            {" "}
            {/* <img src={four} alt="" />{" "} */}
          </div>
          <div id="reward" />
        </div>
      </div>
    </div>
  )
}

export default slider
