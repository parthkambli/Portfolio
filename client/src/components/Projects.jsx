import projectImg from "../assets/Capture.jpg";

const Projects = () => {
  return (
    <div className="container px-5 fw-bold">
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
      <div className="d-flex">
        <div
          className="card text-white m-2 border border-2 border-white rounded-4"
          style={{ width: "18rem", backgroundColor: "#111418" }}
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
            <div className="d-flex justify-content-between">
              <a href="/" className="btn outlineBtn">
                Git Hub
              </a>
              <a href="/" className="btn Btn">
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div
          className="card text-white m-2 border border-2 border-white rounded-4"
          style={{ width: "18rem", backgroundColor: "#111418" }}
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
            <div className="d-flex justify-content-between">
              <a href="/" className="btn outlineBtn">
                Git Hub
              </a>
              <a href="/" className="btn Btn">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
