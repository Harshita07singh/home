import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import xIcon from '../assets/images/x-2.png';



const blog = () => {
  return (
    <div>
      <div id = "blog" className="blog-section style-two pt-95 pb-50">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="dreamit-section-title two text-center pb-20">
          <div className="dreamit-section-sub-title">
            <h5>
              {" "}
              <img src={xIcon} alt="" /> Blog
            </h5>
          </div>
          <div className="dreamit-section-main-title res-align">
            <h1>Our Blog</h1>
          </div>
          <div className="dreamit-section-content-text res-align">
            <p className="ptext res-align">
              XPO will be based on extensive market research of
              Cryptocurrencies, its compatibility with third-party services
              wallets, exchanges etc, and performance over the years.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-30">
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-box ">
          <div className="blog-thumb">
            {" "}
            <img src={blog1} alt="" />{" "}
          </div>
          <div className="blog-content">
            <div className="meta-box">
              <div className="meta-icon">
                {" "}
                <i className="fas fa-calculator" />{" "}
              </div>
              <div className="meta-date">
                <p>15 Dec 2024</p>
              </div>
            </div>
            <div className="blog-title">
              {" "}
              <a href="https://xpo.ru/blogs/the_role_of_cryptocurrency_in_emerging_markets">
                <h2>The Role of Cryptocurrency...</h2>
              </a>{" "}
            </div>
            <div className="blog-content-text">
              <p>
                In recent years, cryptocurrencies have transcended their initial
                hype as speculative assets and begun to make.
              </p>
            </div>
            <div className="blog-btn">
              {" "}
              <a href="https://xpo.ru/blogs/the_role_of_cryptocurrency_in_emerging_markets">
                Read More <i className="fas fa-plus" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-box ">
          <div className="blog-thumb">
            {" "}
            <img src={blog2} alt="" />{" "}
          </div>
          <div className="blog-content">
            <div className="meta-box">
              <div className="meta-icon">
                {" "}
                <i className="fas fa-calculator" />{" "}
              </div>
              <div className="meta-date">
                <p>26 Nov 2024</p>
              </div>
            </div>
            <div className="blog-title">
              {" "}
              <a href="https://xpo.ru/blogs/the_future_of_bitcoin">
                <h2>The Future of Bitcoin...</h2>
              </a>{" "}
            </div>
            <div className="blog-content-text">
              <p>
                Since its inception in 2009, Bitcoin has captured the
                imagination of technologists, economists, and investors.
              </p>
            </div>
            <div className="blog-btn">
              {" "}
              <a href="https://xpo.ru/blogs/the_future_of_bitcoin">
                Read More <i className="fas fa-plus" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-box ">
          <div className="blog-thumb">
            {" "}
            <img src={blog3} alt="" />{" "}
          </div>
          <div className="blog-content">
            <div className="meta-box">
              <div className="meta-icon">
                {" "}
                <i className="fas fa-calculator" />{" "}
              </div>
              <div className="meta-date">
                <p>12 Sep 2024</p>
              </div>
            </div>
            <div className="blog-title">
              {" "}
              <a href="https://xpo.ru/blogs/real_stories_of_people_who_became_millionaires_through_crypto">
                <h2>Real Stories of People...</h2>
              </a>{" "}
            </div>
            <div className="blog-content-text">
              <p>
                The world of cryptocurrency is filled with tales of meteoric
                rises and jaw-dropping fortunes. For some, the crypto . . .
              </p>
            </div>
            <div className="blog-btn">
              {" "}
              <a href="https://xpo.ru/blogs/real_stories_of_people_who_became_millionaires_through_crypto">
                Read More <i className="fas fa-plus" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex m-auto justify-content-center ">
      <a
        href="/blogPage"
        className=" "
        style={{
          background: "#1e53a1",
          padding: "10px 20px",
          borderRadius: 8,
          color: "#fff"
        }}
      >
        {" "}
        View all blogs
      </a>
    </div>
    <div id="contact" />
  </div>
</div>

    </div>
  )
}

export default blog
