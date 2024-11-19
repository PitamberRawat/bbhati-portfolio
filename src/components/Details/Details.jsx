import { useParams } from "react-router-dom";
import "./Details.css";
import SubDetail from "./SubDetail";
import imageDetails from "./imageData";

const Details = () => {
  const { id } = useParams();
  const imgId = parseInt(id, 10);
  const imageDetail = imageDetails.find((detail) => detail.id === imgId);

  const { title, mainHeading, details, subDetails } = imageDetail;

  if (!imageDetail) return <p>Details not found.</p>;
  return (
    <>
      <div class="containerDetail">
        <h1 className="main-detail-heading">{title}</h1>
        <div className="detail-div">
          <div class="first-div">
            <h3 className="main-heading">
              <strong>{mainHeading}</strong>
            </h3>
            <p style={{ fontSize: "18.2px", lineHeight: "1.5" }}>{details}</p>
          </div>
          <div class="second-div"></div>
        </div>
      </div>
      {subDetails.map((subDetail) => {
        return <SubDetail idx={imgId} subD={subDetail} />;
      })}
    </>
  );
};

export default Details;
