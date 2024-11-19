import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
    document.body.style.overflow = isClicked ? "auto" : "hidden";
  }
  const location = useLocation();
  const [isCasestudies, setIsCasestudies] = useState(false);

  useEffect(() => {
    setIsCasestudies(
      location.pathname.includes("/casestudies") ||
        location.pathname.includes("/details")
    );
  }, [location.pathname]);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img
              className="logo-img"
              src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/596ef9da-7dcf-4ed6-886a-4ac95e55adc7/bb-high-resolution-logo-black-transparent.png?format=1500w"
              alt=""
            />
          </Link>

          <div onClick={handleClick} className="hamburger">
            <div className={isClicked ? "tilt1" : " lines"}></div>
            <div className={isClicked ? "tilt2" : " lines"}></div>
          </div>

          <div className="banner2">
            <div className="nav2">
              <Link
                to="/"
                className={
                  !isCasestudies
                    ? "text border-bottom text2 home"
                    : "text text2 home"
                }
              >
                Home
              </Link>
              <Link
                to="/casestudies"
                className={
                  isCasestudies
                    ? "text border-bottom text2 case-studies"
                    : "text text2 case-studies"
                }
              >
                Case Studies
              </Link>
            </div>
            <div className=" btn2">
              <a
                href="https://linkedin.com/in/bhushanbhati"
                className="linkedin-btn"
              >
                Get LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      {isClicked ? (
        <div className="banner">
          <div className="nav-list">
            <Link
              to="/"
              className={
                !isCasestudies ? "text border-bottom home" : "text home"
              }
            >
              Home
            </Link>
            <Link
              to="/casestudies"
              className={
                isCasestudies
                  ? "text border-bottom case-studies"
                  : "text case-studies"
              }
            >
              Case Studies
            </Link>
          </div>
          <div className="btn">
            <a
              href="https://linkedin.com/in/bhushanbhati"
              className="linkedin-btn"
            >
              Get LinkedIn
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
