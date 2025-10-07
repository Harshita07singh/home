import React from 'react'

const sidebarinfo = () => {
  return (
    <div>
      <div className="xs-sidebar-group info-group">
  <div className="dt-overlay bt-black" />
  <div className="dt-sidebar-widget">
    <div className="sidebar-container">
      <div className="widget-top">
        {" "}
        <a href="#" className="close">
          {" "}
          X{" "}
        </a>{" "}
      </div>
      <div className="sidebar-textwidget">
        {/* Sidebar Info Content */}
        <div className="sidebar-info-contents">
          <div className="content-inner">
            <div className="logo">
              {" "}
              <a href="#index">
                <img src="assets/images/logo-white.png" alt="" />
              </a>{" "}
            </div>
            <div className="content-text">
              <p className="text-white">
                The argument in placerat vitae lacus ut scelerisque. Fusce
                luctus odio ac nibh luctus, in porttitor theo lacus egestas
                etiusto odio data center.
              </p>
            </div>
            <div className="contact-info">
              <div className="location-content d-flex">
                <div className="location-icon">
                  {" "}
                  <i className="fas fa-map-marker-alt" />{" "}
                </div>
                <div className="location-content-text">
                  <p>
                    13/A Tropical center Rs <br />
                    london WC1B 4EA{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-location-box">
              <div className="location-content d-flex">
                <div className="location-icon">
                  {" "}
                  <i className="fas fa-phone-alt" />{" "}
                </div>
                <div className="location-content-text">
                  <p>+8 91230 456 788</p>
                </div>
              </div>
            </div>
            <div className="footer-location-box">
              <div className="location-content">
                <div className="location-title">
                  <h2>Open Hours</h2>
                </div>
                <div className="location-content-text">
                  <p>
                    Mon-Sat: 8 am-5 pm <br />
                    Sunday Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Social Box */}
          <div className="social-icon pt-40">
            <ul>
              <li>
                {" "}
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default sidebarinfo
