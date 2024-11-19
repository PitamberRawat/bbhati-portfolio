import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-top">
        <div className="im">
          <p className="im-text">
            I'm <span className="a-text-top">a</span>
          </p>
        </div>
        <div className="heading-container">
          <h1 className="heading">Product Manager & Entreprenuer</h1>
          <p className="para">
            with expertise in SaaS, E-Commerce, Consumer Apps, Hospitality -
            Tech & AI
          </p>
        </div>
        <div className="btn-container">
          <a href="" className="btn-text">
            Lets Talk!
          </a>
        </div>
        <div className="small-para-container">
          <p className="para">I love taking things from 0 - 1!</p>
        </div>
      </div>
      <div className="content-bottom">
        <div className="heading-container head-con ">
          <h1 className="heading heading-bottom">
            300k users & <span className="span"></span>$9Mn in Direct{" "}
            <span className="span"></span>Impact
          </h1>
          <p className="para para-bottom">
            4+ years in Product Management have allowed me to work on a
            multitude of products with a combined user base of 300,000 people
            and a cumulative revenue of $9Mn. <br />
            <br />I have successfully managed 4 products from zero to hero and
            have built 2 businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
