import React from "react";
import "./SubDetail.css";
import { useNavigate } from "react-router-dom";

const SubDetail = ({ idx, subD }) => {
  //   const isEven = idx % 2 === 1;

  const navigate = useNavigate();
  return (
    <>
      <div
        className="sub-detail-container"
        style={{
          backgroundColor: `${subD.isEven ? "#1c1c1c" : ""}`,
          color: `${subD.isEven ? "#FAFAFA" : ""}`,
          height: "100%",
          width: "100%",
        }}
      >
        <div className="sub-detail-text-container">
          <h1 className="sub-detail-main-heading">{subD.subHeading}</h1>
          {subD.moreDetails.split("\n").map((line, index) => (
            <p
              style={{
                fontSize: "18.2px",
                lineHeight: "1.5",
                whiteSpace: "pre-wrap",
                marginBottom: "22px",
              }}
            >
              {line}
            </p>
          ))}
        </div>
        <div className="subd-img-div">
          <img
            style={{
              // height: "500px",
              width: "100%",
              objectFit: "contain",
              outline: "none",
              borderRadius: "20px",
              objectPosition: "50% 50%",
            }}
            src={subD.url}
            alt=""
          />
        </div>
      </div>
      {subD.btn && (
        <a
          style={{
            margin: "auto",
            height: "60px",
            textDecoration: "none",
            color: "white",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "40px",
          }}
          href="https://www.amazon.in/INDIA-VISION-New-Age-Equality/dp/8192769453"
        >
          <div
            style={{
              padding: "10px 30px",
              fontSize: "24px",
            }}
          >
            Buy Now
          </div>
        </a>
      )}
      {(subD.leftBtn || subD.rightBtn) && (
        <div
          style={{
            backgroundColor: `${subD.isEven ? "#1c1c1c" : ""}`,
            color: `${subD.isEven ? "white" : ""}`,
          }}
          className="btn-lr-div"
        >
          <div
            onClick={() => navigate(`/details/${idx - 1}`)}
            className="nav-case-btn"
          >
            {subD.leftBtn && (
              <span style={{ fontSize: "45px", paddingRight: "10px" }}>
                &lt;
              </span>
            )}
            {subD.leftBtn}
          </div>
          <div
            onClick={() => navigate(`/details/${idx + 1}`)}
            className="nav-case-btn"
          >
            {subD.rightBtn}
            {subD.rightBtn && (
              <span style={{ fontSize: "45px", paddingLeft: "10px" }}>
                {" "}
                &gt;
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SubDetail;
