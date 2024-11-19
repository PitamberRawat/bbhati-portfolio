import React from "react";
import "./Cases.css";
import { useNavigate } from "react-router-dom";
const Cases = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="curve">
        <div className="inner-curve"></div>
      </div>
      <div className="cases-container cases1">
        <div
          className="menu-container"
          style={{
            marginBottom: "30px",
            gap: "10px",
          }}
        >
          <div className=" case-text case-case-studies">Case Studies</div>
          <div onClick={() => navigate("/casestudies")} className="btn-view">
            <div className="view-btn">View here</div>
          </div>
        </div>
        <ImgContainer
          top={35}
          right={20}
          w="100px"
          para="Vacation rental management for luxury homes!"
          width="306.75px"
          height="409px"
          src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/d8457883-1c12-49e2-8e2f-9220e0f899ac/Add+a+subheading.png?format=1500w"
        />
        <ImgContainer
          width="384.114px"
          height="339px"
          src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/2548cf6d-9d83-4e7a-93bb-3a1a34a1120e/Screenshot+2024-07-14+at+4.25.45%E2%80%AFPM.png"
        />
        <ImgContainer
          top={65}
          right={25}
          w="370px"
          para="A personalized AI-driven platform for your mental health concerns"
          height="409px"
          width="306.75px"
          src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/cfa72a49-6d39-4c88-aa68-df5051e5691f/Add+a+subheading+%281%29.png?format=2500w"
        />
        <ImgContainer
          top={30}
          right={20}
          w="300px"
          para="Ecommerce brand for car enthusiats!"
          height="444px"
          width="270.295px"
          src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/97499a64-8bbc-4ad3-aad1-278ef9a0c572/Screenshot+2024-07-14+at+4.16.54%E2%80%AFPM.png?format=1500w"
        />
        <ImgContainer
          height="380px"
          width="149.336px"
          src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/f0f5e9ab-f6b3-446c-9133-969bb7cd386c/Add_a_subheading__2_-removebg-preview.png?format=1500w"
        />
        <ImgContainer
          height="199px"
          width="504.456px"
          src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/6b47f4c4-b6ee-47af-8947-df9bc09cb5ff/Screenshot+2024-07-14+at+4.01.39%E2%80%AFPM.png?format=1500w"
        />
      </div>

      <div className="cases-container cases2">
        <div className="img-con1">
          <ImgContainerTwo
            top={35}
            right={20}
            w="100px"
            para="Vacation rental management for luxury homes!"
            width="306.75px"
            src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/d8457883-1c12-49e2-8e2f-9220e0f899ac/Add+a+subheading.png?format=1500w"
          />
          <ImgContainerTwo
            width="800.336px"
            src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/f0f5e9ab-f6b3-446c-9133-969bb7cd386c/Add_a_subheading__2_-removebg-preview.png?format=1500w"
          />

          <ImgContainerTwo
            top={65}
            right={25}
            w="370px"
            para="A personalized AI-driven platform for your mental health concerns"
            width="306.75px"
            src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/cfa72a49-6d39-4c88-aa68-df5051e5691f/Add+a+subheading+%281%29.png?format=2500w"
          />
        </div>
        <div className="menu-container">
          <div className="case-text case-case-studies">Case Studies</div>
          <div onClick={() => navigate("/casestudies")} className="btn-view">
            <div className="view-btn">View here</div>
          </div>
        </div>
        <div className="img-con2">
          <ImgContainerTwo
            width="384.114px"
            src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/2548cf6d-9d83-4e7a-93bb-3a1a34a1120e/Screenshot+2024-07-14+at+4.25.45%E2%80%AFPM.png"
          />
          <ImgContainerTwo
            width="504.456px"
            src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/6b47f4c4-b6ee-47af-8947-df9bc09cb5ff/Screenshot+2024-07-14+at+4.01.39%E2%80%AFPM.png?format=1500w"
          />
          <ImgContainerTwo
            top={30}
            w="300px"
            para="Ecommerce brand for car enthusiats!"
            width="270.295px"
            src="https://images.squarespace-cdn.com/content/v1/6690e933f72b900f19d380f0/97499a64-8bbc-4ad3-aad1-278ef9a0c572/Screenshot+2024-07-14+at+4.16.54%E2%80%AFPM.png?format=1500w"
          />
        </div>
      </div>
    </>
  );
};

export default Cases;

export const ImgContainer = ({ top, right, w, para, height, width, src }) => {
  return (
    <div
      className="img-container"
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          width: { width },
          height: { height },
          borderRadius: "10px",
        }}
      >
        <img
          style={{
            // height: "409px",
            objectFit: "contain",
            objectPosition: "50% 50%",
          }}
          width={width}
          height={height}
          className="img"
          src={src}
          alt=""
        />
        {para && (
          <p
            style={{
              // whiteSpace: "wrap",
              position: "absolute",
              color: "white",
              textAlign: "center",
              top: top,
              right: right,
              maxWidth: w,
              lineHeight: 1.3,
            }}
          >
            {para}
          </p>
        )}
      </div>
    </div>
  );
};
export const ImgContainerTwo = ({ top, right, w, para, width, src }) => {
  return (
    <div
      className="img-container img-con"
      style={{
        position: "relative",
      }}
    >
      <img
        style={{
          objectFit: "contain",
          objectPosition: "50% 50%",
        }}
        width={width}
        className="img"
        src={src}
        alt=""
      />
      {para && (
        <p
          style={{
            // whiteSpace: "wrap",
            position: "absolute",
            color: "white",
            textAlign: "center",
            top: top,
            right: right,
            maxWidth: w,
            lineHeight: 1.3,
          }}
        >
          {para}
        </p>
      )}
    </div>
  );
};
