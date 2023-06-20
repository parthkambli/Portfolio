import React from "react";

const About = () => {
  return (
    <div className="container px-5 fw-bold">
      <h1
        className="display-3"
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        <em>
          About<span style={{ color: "#20C997" }}> Me</span>
        </em>
      </h1>
      <p>
        I am a passionate and creative{" "}
        <span style={{ color: "#20C997", fontWeight: 600 }}>
          web developer and designer,
        </span>
        dedicated to delivering exceptional digital experiences. With a strong
        focus on both aesthetics and functionality, I strive to create stunning
        and user-friendly websites that leave a lasting impression. My expertise
        lies in the{" "}
        <span style={{ color: "#20C997", fontWeight: 600 }}>
          MERN (MongoDB, Express.js, React.js, Node.js) stack,
        </span>{" "}
        which allows me to develop robust and scalable web applications. 
      </p>
      <div
        className="row m-2 p-2 pt-4 rounded-4"
        style={{ backgroundColor: "#111418" }}
      >
        <div className="col-6">
          <p>
            Name :{" "}
            <span className="m-0 fs-6 fw-light" style={{ color: "#999999" }}>
              Parth Kambli
            </span>
          </p>
          <p>
            DOB :{" "}
            <span className="m-0 fs-6 fw-light" style={{ color: "#999999" }}>
              15-03-1998
            </span>
          </p>
          <p>
            Phone :{" "}
            <span className="m-0 fs-6 fw-light" style={{ color: "#20C997" }}>
              +91 9284968052
            </span>
          </p>
        </div>
        <div className="col-6">
          <p>
            Address :{" "}
            <span className="m-0 fs-6 fw-light" style={{ color: "#999999" }}>
              Patel Pada, Dahanu, Maharashtra, 401602
            </span>
          </p>
          <p>
            Email :{" "}
            <span className="m-0 fs-6 fw-light" style={{ color: "#20C997" }}>
              parthkambli.pk1@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
