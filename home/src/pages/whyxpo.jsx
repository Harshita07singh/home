import React from "react";
import { useState } from "react";
import single from "../assets/images/single.png";

const Whyxpo = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedToken, setSelectedToken] = useState({ name: "", symbol: "" });
  const [amount, setAmount] = useState("");

  const handlePurchaseClick = (name, symbol) => {
    setSelectedToken({ name, symbol });
    setAmount("");
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleConfirm = () => {
    alert(
      `Purchased ₹${amount} of ${selectedToken.name} (${selectedToken.symbol})`
    );
    setShowModal(false);
  };
  return (
    <div>
      <>
        <div id="whyxpo" className="service-section style-three pt-50 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="dreamit-section-title two text-center pb-20">
                  <div className="dreamit-section-sub-title">
                    <h5>
                      {" "}
                      <img src="assets/images/x-2.png" alt="" /> Why to become a
                      XenoPortfolian
                    </h5>
                  </div>
                  <div className="dreamit-section-main-title res-align">
                    <h1>Singular focus on Asset Management</h1>
                  </div>
                  <div className="dreamit-section-content-text">
                    <p className="ptext res-align">
                      We have no alternative business interests. This means that
                      we are single-mindedly committed to do well for our
                      investors and for ourselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-40">
              <div className="col-lg-6 col-md-6">
                <div className="single-service-box d-flex">
                  <div className="service-thumb">
                    {" "}
                    <img src="assets/images/new/index-fund.png" alt="" />{" "}
                  </div>
                  <div className="service-content">
                    <h3>Our Index Fund Performance</h3>
                    <p>
                      XPO provides a way to track the performance of the forex,
                      CFD &amp; crypto markets as a whole by holding a single
                      index asset. Index funds have consistently beaten the
                      average managed fund since their inception.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-service-box d-flex">
                  <div className="service-thumb">
                    {" "}
                    <img src="assets/images/new/easy.png" alt="" />{" "}
                  </div>
                  <div className="service-content">
                    <h3>Ease &amp; Simplicity</h3>
                    <p>
                      There are literally thousands of trading script for
                      investors to choose from. Choice paralysis: choice adds
                      cost, complexity and the need for advice. XPO eliminates
                      this complexity for all kind of investors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-service-box d-flex">
                  <div className="service-thumb">
                    {" "}
                    <img src="assets/images/new/idea.png" alt="" />{" "}
                  </div>
                  <div className="service-content">
                    <h3>Power of Ideas</h3>
                    <p>
                      We believe in the power of ideas over a top-down investing
                      approach or philosophy. We seek out and embrace diverse
                      thinking and ideas to create the best outcomes for our
                      clients and their differing needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-service-box d-flex">
                  <div className="service-thumb">
                    {" "}
                    <img src="assets/images/new/trust.png" alt="" />{" "}
                  </div>
                  <div className="service-content">
                    <h3>Managing with Trust</h3>
                    <p>
                      This is why we’re trusted to manage $1.3 trillion of
                      assets*, giving our clients the confidence of working with
                      a partner with size, scale and stability, who takes the
                      utmost pride in their duty of care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="xpoindex" />
        <div className="token-section style-four pt-5 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="dreamit-section-title two text-center pb-20">
                  <div className="dreamit-section-sub-title">
                    <h5>
                      <img src="assets/images/x-2.png" alt="" />
                      Index
                    </h5>
                  </div>
                  <div className="dreamit-section-main-title res-align">
                    <h1>Discover Our Indexes</h1>
                    <p>
                      Access expertly curated indexes designed to simplify your
                      investments. <br />
                      From Forex to Crypto and CFDs, diversify your portfolio
                      with ease!
                    </p>
                  </div>
                  <div className="m-auto text-left pt-5 mtcenter">
                    <h5 className="mtcenter">
                      Power of XPO Crypto Index Strategists
                    </h5>
                    <p className="mtcenter">
                      Discover the best performing Crypto Strategies from all
                      XPO Strategists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-10">
              <div className="col-lg-3 col-md-6">
                <div className="single-token-box">
                  <div className="token-thumb">
                    {" "}
                    <img
                      src="https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/451_1669377121.png"
                      alt=""
                      height={70}
                    />{" "}
                  </div>
                  <div className="text-white font-weight-bold mt-1 mb-1">
                    Alpha Union
                  </div>
                  <div className="tsize">@ALUN</div>
                  <div className="token-content">
                    <div className="token-btn">
                      {" "}
                      <a href="#">4.16%</a>
                      <div className="pt-2 tsize">Weekly Growth</div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handlePurchaseClick("Alpha Union", "@ALUN")
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-token-box">
                  <div className="token-thumb">
                    {" "}
                    <img
                      src="https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/953_1669377131.png"
                      alt=""
                      height={70}
                    />{" "}
                  </div>
                  <div className="text-white font-weight-bold mt-1 mb-1">
                    Cloud Trader
                  </div>
                  <div className="tsize">@CLDT</div>
                  <div className="token-content">
                    <div className="token-btn">
                      {" "}
                      <a href="#">3.98%</a>
                      <div className="pt-2 tsize">Weekly Growth</div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handlePurchaseClick("Cloud Trader", "@CLDT")
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-token-box">
                  <div className="token-thumb">
                    {" "}
                    <img
                      src="https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/248_1669377140.png"
                      alt=""
                      height={70}
                    />{" "}
                  </div>
                  <div className="text-white font-weight-bold mt-1 mb-1">
                    Zhangdang
                  </div>
                  <div className="tsize">@ZHND</div>
                  <div className="token-content">
                    <div className="token-btn">
                      {" "}
                      <a href="#">3.36%</a>
                      <div className="pt-2 tsize">Weekly Growth</div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handlePurchaseClick("Zhangdang", "@ZHND")
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-token-box">
                  <div className="token-thumb">
                    {" "}
                    <img
                      src="https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/855_1669377154.png"
                      alt=""
                      height={70}
                    />{" "}
                  </div>
                  <div className="text-white font-weight-bold mt-1 mb-1">
                    Super Crypto
                  </div>
                  <div className="tsize">@SUCP</div>
                  <div className="token-content">
                    <div className="token-btn">
                      {" "}
                      <a href="#">3.05%</a>
                      <div className="pt-2 tsize">Weekly Growth</div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handlePurchaseClick("Super Crypto", "@SUCP")
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-auto text-left pt-5">
              <h5 className="mtcenter">
                Power of XPO Forex and CFD Strategists
              </h5>
              <p className="mtcenter">
                Discover the best performing Forex and CFD Strategies from all
                XPO Strategists.
              </p>
            </div>
            <div className="row pt-10">
              <div className="col-lg-3 col-md-6">
                <div className="single-token-box">
                  <div className="token-thumb">
                    {" "}
                    <img
                      src="https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/465_1669377238.png"
                      alt=""
                      height={70}
                    />{" "}
                  </div>
                  <div className="text-white font-weight-bold mt-1 mb-1">
                    Dimond FX Index
                  </div>
                  <div className="tsize">@DIMX</div>
                  <div className="token-content">
                    <div className="token-btn">
                      {" "}
                      <a href="#">3.11%</a>
                      <div className="pt-2 tsize">Weekly Growth</div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handlePurchaseClick("Diamond FX Index", "@DIMX")
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-token-box">
                  <div className="token-thumb">
                    {" "}
                    <img
                      src="https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/173_1669377254.png"
                      alt=""
                      height={70}
                    />{" "}
                  </div>
                  <div className="text-white font-weight-bold mt-1 mb-1">
                    Moscow Mule
                  </div>
                  <div className="tsize">@MSMU</div>
                  <div className="token-content">
                    <div className="token-btn">
                      {" "}
                      <a href="#">4.53%</a>
                      <div className="pt-2 tsize">Weekly Growth</div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handlePurchaseClick("Moscow Mule", "@MSMU")
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-token-box">
                  <div className="token-thumb">
                    {" "}
                    <img
                      src="https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/166_1669377309.png"
                      alt=""
                      height={70}
                    />{" "}
                  </div>
                  <div className="text-white font-weight-bold mt-1 mb-1">
                    BYK Capital
                  </div>
                  <div className="tsize">@BCAP</div>
                  <div className="token-content">
                    <div className="token-btn">
                      {" "}
                      <a href="#">4.09%</a>
                      <div className="pt-2 tsize">Weekly Growth</div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handlePurchaseClick("BYK Capital", "@BCAP")
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-token-box">
                  <div className="token-thumb">
                    {" "}
                    <img
                      src="https://xpoadmin.s3.us-east-2.amazonaws.com/uploads/632_1669377322.png"
                      alt=""
                      height={70}
                    />{" "}
                  </div>
                  <div className="text-white font-weight-bold mt-1 mb-1">
                    Halloween Trade
                  </div>
                  <div className="tsize">@HATRD</div>
                  <div className="token-content">
                    <div className="token-btn">
                      {" "}
                      <a href="#">4.22%</a>
                      <div className="pt-2 tsize">Weekly Growth</div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handlePurchaseClick("Halloween Trade", "@HATRD")
                        }
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="whatxpo" />
          </div>
        </div>
        <div className="choose-section style-two pt-90 pb-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="dreamit-section-title two pb-20">
                  <div className="dreamit-section-sub-title">
                    <h5>
                      {" "}
                      <img src="assets/images/x-2.png" alt="" />{" "}
                      <strong>About XPO</strong>
                    </h5>
                  </div>
                  <div className="dreamit-section-main-title">
                    <h1 className="mtcenter">
                      Driving Innovation in Investment Management Since 2016
                    </h1>
                  </div>
                  <div className="dreamit-section-content-text">
                    <p className="mtcenter">
                      Founded in 2016 and with offices across the globe, XPO
                      endeavors to deliver innovative solutions to the
                      investment management community at large.{" "}
                    </p>
                  </div>
                  <div className="dreamit-content-text-inner">
                    <p className="mtcenter">
                      These range from spot to derivative trading solutions
                      through index services and technology products. XPO
                      expertise and technological prowess enable us to bring
                      disruptive best-in-class solutions to the financial
                      market.
                    </p>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="choose-btn mr-3">
                      {" "}
                      <a
                        href="assets/images/XPOCompanyProfileEN.pdf"
                        target="_blank"
                      >
                        <i className="flaticon-plus" /> Download XPO Profile
                      </a>{" "}
                    </div>
                    <div className="choose-btn">
                      {" "}
                      <a
                        href="assets/images/investor-desk-en.pdf"
                        target="_blank"
                      >
                        <i className="flaticon-plus" /> Download Investment
                        Opportunity
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="choose-thumb">
                  {" "}
                  <img src={single} alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Purchase {selectedToken.name}</h5>
                  <button type="button" className="close" onClick={handleClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <label>Enter Amount:</label>
                  <input
                    type="number"
                    value={amount}
                    className=" w-full px-3 py-2 border rounded mb-4 text-black"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="mt-3">
                    <strong>Platform Charges:</strong> ₹
                    {(amount * 0.05).toFixed(2)} (5%)
                  </div>
                  <div className="mt-2">
                    <strong>Total Deducted:</strong> ₹
                    {(amount * 1.05).toFixed(2)}
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-success" onClick={handleConfirm}>
                    Confirm Purchase
                  </button>
                  <button className="btn btn-secondary" onClick={handleClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Whyxpo;
