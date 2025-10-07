import React from 'react'

const accessxpo = () => {
  return (
    <div>
      <div className="call-section pt-100 pb-120">
  <div className="container">
    <div className="row section">
      <div className="col-lg-8 col-md-8">
        <div className="single-call-content">
          <div className="call-title">
            <h2 className="mtcenter">Access XPO Anytime, Anywhere</h2>
          </div>
          <div className="call-content-text">
            <p className="mtcenter">
              Stay connected and manage your investments on the go with our
              intuitive mobile app, available on Android. Experience seamless
              trading, real-time updates, and full control at your fingertips.
            </p>
          </div>
          {/* <span><img src="assets/images/new/shape4.png" alt=""></span>*/}{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.pocketfolio&hl=en"
            target="_blank"
          >
            {" "}
            <span className="">
              <img src="assets/images/new/shape3.png" alt="" />
            </span>
          </a>{" "}
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="call-shape bounce-animate2">
          {" "}
          <img src="assets/images/new/phone.png" alt="" />{" "}
        </div>
        <div className="call-shape2 wooo apple">
          {" "}
          <img src="assets/images/new/shape2.png" alt="" />{" "}
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default accessxpo
