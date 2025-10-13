import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import BlogSection from "./blogSection";
const blogPage = () => {
  return (
    <div>
      <Header  />
      <div className="breatcome-area d-flex align-items-center my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome-content text-center">
                <div className="breatcome-content-title">
                  <h1>Blogs</h1>
                </div>
                <div className="breatcome-content-text">
                  <ul>
                    <li>
                      <a href="/">Home </a>{" "}
                      <i className="fas fa-chevron-right" />{" "}
                      <span>News &amp; Insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogSection />

      <Footer />
    </div>
  );
};

export default blogPage;
