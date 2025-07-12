import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import carousel1 from "../utils/images/carousel1.svg";
import carousel2 from "../utils/images/carousel2.svg";
import carousel3 from "../utils/images/carousel3.svg";

export default function YogaHome() {
  const navigate = useNavigate(); // Create a navigate function using the hook

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the provided path
  };

  return (
    <div className="home-main">
      <div className="carousel-container">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} id="img-car" className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel2} id="img-car" className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel3} id="img-car" className="d-block" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="btn-section">
        <button className="btn start-btn" onClick={() => handleNavigate("/start")}>
          Let's Start
        </button>
        <button className="btn start-btn" onClick={() => handleNavigate("/tutorials")}>
          Tutorials
        </button>
      </div>
    </div>
  );
}
