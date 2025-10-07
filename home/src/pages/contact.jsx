import React from 'react'

const contact = () => {
  return (
    <div>
      <div id ="contact" className=" contact-section style-four pt-110 pb-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="dreamit-section-title two text-center pb-20">
          <div className="dreamit-section-sub-title">
            <h5>
              {" "}
              <img src="assets/images/x-2.png" alt="" /> Contacts
            </h5>
          </div>
          <div className="dreamit-section-main-title res-align">
            <h1>Stay Update With Us</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-20 m-auto justify-content-center">
      <div className="col-lg-12 col-md-12 d-flex justify-content-center">
        <div className="single-contact-icon-box d-flex align-items-center">
          <div className="contact-icon">
            {" "}
            <i className="flaticon-message" />{" "}
          </div>
          <div className="contact-content-text">
            <p>hello@xpo.ru</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row upper12 align-items-center pt-60">
      <div className="col-lg-2" />
      <div className="col-lg-8 col-md-12 p-0">
        <div className="contact_from upper10">
          <form
            action="https://clients.xpo.ru/api/contact-us"
            method="POST"
            id="dreamit-form"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="form_box mb-2">
                  <input
                    className="form-control"
                    type="text"
                    name="contact-name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form_box mb-2">
                  <input
                    className="form-control"
                    type="text"
                    name="contact-email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <textarea
                    className="form-control"
                    name="contact-message"
                    id="message"
                    cols={10}
                    rows={5}
                    placeholder="Your message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="quote_btn text_center mt-15">
                <button className="btn" type="submit">
                  {" "}
                  SUBMIT MESSAGE{" "}
                </button>
              </div>
            </div>
          </form>
          <div id="status" />
        </div>
      </div>
      <div className="col-lg-2" />
    </div>
  </div>
</div>

    </div>
  )
}

export default contact
