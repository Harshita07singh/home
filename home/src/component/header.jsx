import React from 'react'

const header = () => {
  return (
    <div>
      <>
  <div className="header-area" id="sticky-header">
    <div className="container-fluid">
      <div className="row align-items-center d-flex">
        <div className="col-lg-3 lsticky">
          <div className="header-logo wset">
            {" "}
            <a className="main-logo" href="https://xpo.ru/">
              <img src="https://xpo.ru/assets/images/logo-white.png" alt="" />
            </a>{" "}
            <a className="stiky-logo" href="https://xpo.ru/">
              <img src="https://xpo.ru/assets/images/logo-white.png" alt="" />
            </a>{" "}
          </div>
        </div>
        <div className="col-lg-8 text-left">
          <nav className="cryptozen_menu">
            <div className="header-menu">
              <ul className="nav_scroll">
                <li>
                  <a href="#whatxpo">what is xpo</a>
                </li>
                <li>
                  <a href="#whyxpo">why xpo</a>
                </li>
                <li>
                  <a href="#xpoindex">xpo indexes</a>
                </li>
                <li>
                  <a href="#fromindex">from index mangers</a>
                </li>
                <li>
                  <a href="#blog">blog</a>
                </li>
                <li>
                  <a href="#team">team </a>
                </li>
                <li>
                  <a href="#contact">contact</a>
                </li>
              </ul>
              <div className="header-btn">
                {" "}
                <a href="https://clients.xpo.ru/register">Sign up</a>{" "}
              </div>
              <div className="header-btn">
                {" "}
                <a href="https://clients.xpo.ru/login">Sign in</a>{" "}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
    <div className="mobile-menu mean-container">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span />
          <span />
          <span />
        </a>
        <nav className="mean-nav">
          <ul className="nav_scroll" style={{ display: "none" }}>
            <li>
              <a href="#whatxpo">
                <i className="fa fa-external-link mbde" aria-hidden="true" />
                what is xpo
              </a>
            </li>
            <li>
              <a href="#whyxpo">
                <i className="fa fa-external-link mbde" aria-hidden="true" />
                why xpo
              </a>
            </li>
            <li>
              <a href="#xpoindex">
                <i className="fa fa-external-link mbde" aria-hidden="true" />
                xpo indexes
              </a>
            </li>
            <li>
              <a href="#fromindex">
                <i className="fa fa-external-link mbde" aria-hidden="true" />
                from index mangers
              </a>
            </li>
            <li>
              <a href="#blog">
                <i className="fa fa-external-link mbde" aria-hidden="true" />
                blog
              </a>
            </li>
            <li>
              <a href="#team">
                <i className="fa fa-external-link mbde" aria-hidden="true" />
                team
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fa fa-external-link mbde" aria-hidden="true" />
                contact
              </a>
            </li>
            <li style={{ paddingBottom: 15 }} className="mean-last">
              <div className=" fl-design">
                <div className="d-flex text-center ">
                  <div className="p-2 w-50 text-center d-flex justify-content-center">
                    <a
                      href="https://clients.xpo.ru/register"
                      style={{
                        background: "#050235 !important",
                        textAlign: "center",
                        padding: "10px 0px !important"
                      }}
                    >
                      <i className="fa fa-user mbde" aria-hidden="true" />
                      SIGN UP
                    </a>
                  </div>
                  <div className="p-2 w-50 text-center d-flex justify-content-center">
                    <a
                      href="https://clients.xpo.ru/login"
                      style={{
                        background: "#050235 !important",
                        textAlign: "center",
                        padding: "10px 0px !important"
                      }}
                    >
                      <i className="fa fa-sign-in mbde" aria-hidden="true" />
                      SIGN IN
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Sign In and Sign Up Buttons */}
          </ul>
        </nav>
      </div>
      <div className="mean-push" />
      <nav className="itsoft_menu" style={{ display: "none" }}>
        <ul className="nav_scroll">
          <li>
            <a href="#aboutxpo">
              <i className="fa fa-external-link mbde" aria-hidden="true" />
              what is xpo
            </a>
          </li>
          <li>
            <a href="#whyxpo">
              <i className="fa fa-external-link mbde" aria-hidden="true" />
              why xpo
            </a>
          </li>
          <li>
            <a href="#xpoindex">
              <i className="fa fa-external-link mbde" aria-hidden="true" />
              xpo indexes
            </a>
          </li>
          <li>
            <a href="#fromindex">
              <i className="fa fa-external-link mbde" aria-hidden="true" />
              from index mangers
            </a>
          </li>
          <li>
            <a href="#blog">
              <i className="fa fa-external-link mbde" aria-hidden="true" />
              blog
            </a>
          </li>
          <li>
            <a href="#team">
              <i className="fa fa-external-link mbde" aria-hidden="true" />
              team
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa fa-external-link mbde" aria-hidden="true" />
              contact
            </a>
          </li>
          <li style={{ paddingBottom: 15 }}>
            <div className=" fl-design">
              <div className="d-flex text-center ">
                <div className="p-2 w-50 text-center d-flex justify-content-center">
                  <a
                    href="#"
                    style={{
                      background: "#050235 !important",
                      textAlign: "center",
                      padding: "10px 0px !important"
                    }}
                  >
                    <i className="fa fa-user mbde" aria-hidden="true" />
                    SIGN UP
                  </a>
                </div>
                <div className="p-2 w-50 text-center d-flex justify-content-center">
                  <a
                    href="#"
                    style={{
                      background: "#050235 !important",
                      textAlign: "center",
                      padding: "10px 0px !important"
                    }}
                  >
                    <i className="fa fa-sign-in mbde" aria-hidden="true" />
                    SIGN IN
                  </a>
                </div>
              </div>
            </div>
          </li>
          {/* Sign In and Sign Up Buttons */}
        </ul>
      </nav>
    </div>
  </div>
</>

    </div>
  )
}

export default header
