import React from "react";
import "./Casestudies.css";
import { useNavigate } from "react-router-dom";

const Casestudies = () => {
  const cases = [
    {
      id: 1,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1720990991854-6APRYFKX5WFZYDUNK0NA/Add+a+subheading+%28Instagram+Post%29.png?format=2500w",
      text: "Operations by SaffronStays",
    },
    {
      id: 2,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1720997648234-PJIM8QYNB5L3E9Z80FK8/Add+a+subheading+%28Instagram+Post%29+%281%29.png?format=1500w",
      text: "Solh Wellness",
    },
    {
      id: 3,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1720998403940-H9QTUCON7DL28X0VC8IW/IMG_3346.jpg?format=1500w",
      text: "pragatiE",
    },
    {
      id: 4,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1721001051827-8RG9WM1TRG9FQ2GEJVD2/Add+a+subheading+%28Instagram+Post%29+%285%29.png?format=1500w",
      text: "Slef-Serve Check-In",
    },
    {
      id: 5,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1720999276715-HHRNSVYWT04T08Z91VI9/Add+a+subheading+%28Instagram+Post%29+%283%29.png?format=1500w",
      text: "Club Infinitum Loyalty",
    },
    {
      id: 6,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1720998447936-6GUGIBOGYW5Q38F05DCQ/PHOTO-2024-07-13-09-10-13.jpg?format=1500w",
      text: "Bombay Musk",
    },
    {
      id: 7,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1721000004147-WJYCV11EYVOZA105V6LT/Add+a+subheading+%28Instagram+Post%29+%284%29.png?format=1500w",
      text: "SaffronStays 3.0",
    },
    {
      id: 8,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1720998480294-G42KBM306DYK1OK4E4A9/Add+a+subheading+%28Instagram+Post%29+%282%29.png?format=1500w",
      text: "Rematchh",
    },
    {
      id: 9,
      src: "https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/1720998601373-ODB7SEEAGZ92QZM3LP04/819kbHt2NsL._SL1500_.jpg?format=1500w",
      text: "India Vision",
    },
  ];

  return (
    <div className="cs-container">
      <div className="cs-header">
        <h1 className="glimpse-text">
          Here's a glimpse <br /> into my work
        </h1>
      </div>
      <div className="cs-cases">
        {cases.map((ele) => {
          return <Caseproject id={ele.id} src={ele.src} text={ele.text} />;
        })}
      </div>
    </div>
  );
};

export default Casestudies;

export const Caseproject = ({ id, src, text }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        key={id}
        onClick={() => navigate(`/details/${id}`)}
        className="cases-img-container"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          transition: "opacity 0.3s ease",
          cursor: "pointer",
        }}
      >
        <img
          src={src}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="hover-text">{text}</div>
      </div>
    </>
  );
};
