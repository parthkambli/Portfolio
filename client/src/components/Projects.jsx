import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projectImg from "../assets/Capture.jpg";

const Projects = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    lg: {
      breakpoint: { max: 1199, min: 992 },
      items: 3,
    },
    md: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
    },
    sm: {
      breakpoint: { max: 767, min: 576 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container fw-bold">
      <h1
        className="display-3"
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        <em>
          My<span style={{ color: "#20C997" }}> Projects</span>
        </em>
      </h1>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        removeArrowOnDeviceType={["md", "sm", "xs"]}
      >
        <div
          className="card text-white m-2 my-4 border border-2 border-white rounded-4"
          style={{ backgroundColor: "#111418" }}
        >
          <img
            src={projectImg}
            className="card-img-top rounded-top-4 rounded-bottom-0"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#20C997", fontWeight: 600 }}
            >
              CineVerse
            </h5>
            <p className="card-text">
              The movie app build using TMDB Api and React.js
            </p>
            <div className="row d-flex justify-content-between px-2">
              <a href="/" className="col-lg-6 w-auto btn outlineBtn">
                GitHub
              </a>
              <a href="/" className="col-lg-6 w-auto btn Btn">
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div
          className="card text-white m-2 my-4 border border-2 border-white rounded-4"
          style={{ backgroundColor: "#111418" }}
        >
          <img
            src={projectImg}
            className="card-img-top rounded-top-4 rounded-bottom-0"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#20C997", fontWeight: 600 }}
            >
              CineVerse
            </h5>
            <p className="card-text">
              The movie app build using TMDB Api and React.js
            </p>
            <div className="row d-flex justify-content-between px-2">
              <a href="/" className="col-lg-6 w-auto btn outlineBtn">
                GitHub
              </a>
              <a href="/" className="col-lg-6 w-auto btn Btn">
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div
          className="card text-white m-2 my-4 border border-2 border-white rounded-4"
          style={{ backgroundColor: "#111418" }}
        >
          <img
            src={projectImg}
            className="card-img-top rounded-top-4 rounded-bottom-0"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#20C997", fontWeight: 600 }}
            >
              CineVerse
            </h5>
            <p className="card-text">
              The movie app build using TMDB Api and React.js
            </p>
            <div className="row d-flex justify-content-between px-2">
              <a href="/" className="col-lg-6 w-auto btn outlineBtn">
                GitHub
              </a>
              <a href="/" className="col-lg-6 w-auto btn Btn">
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div
          className="card text-white m-2 my-4 border border-2 border-white rounded-4"
          style={{ backgroundColor: "#111418" }}
        >
          <img
            src={projectImg}
            className="card-img-top rounded-top-4 rounded-bottom-0"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#20C997", fontWeight: 600 }}
            >
              CineVerse
            </h5>
            <p className="card-text">
              The movie app build using TMDB Api and React.js
            </p>
            <div className="row d-flex justify-content-between px-2">
              <a href="/" className="col-lg-6 w-auto btn outlineBtn">
                GitHub
              </a>
              <a href="/" className="col-lg-6 w-auto btn Btn">
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div
          className="card text-white m-2 my-4 border border-2 border-white rounded-4"
          style={{ backgroundColor: "#111418" }}
        >
          <img
            src={projectImg}
            className="card-img-top rounded-top-4 rounded-bottom-0"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#20C997", fontWeight: 600 }}
            >
              CineVerse
            </h5>
            <p className="card-text">
              The movie app build using TMDB Api and React.js
            </p>
            <div className="row d-flex justify-content-between px-2">
              <a href="/" className="col-lg-6 w-auto btn outlineBtn">
                GitHub
              </a>
              <a href="/" className="col-lg-6 w-auto btn Btn">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
