import React from "react";

const Education = () => {
  return (
    <div className="container">
      <h1
        className="display-3"
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        <em>
          My <span style={{ color: "#20C997" }}>Education</span>
        </em>
      </h1>
      <div className="m-2">
        <div
          className="p-3 my-3 rounded-4"
          style={{ backgroundColor: "#111418" }}
        >
          <h3 style={{ fontWeight: 600 }}>
            <span style={{ color: "#20C997" }}>Bachelor's</span> in Computer
            Science
          </h3>
          <p style={{ color: "#999999", margin: 0 }}>2017-2021</p>
          <h5 style={{ fontWeight: 600 }}>
            Dhole patil collage of engineering,{" "}
            <span style={{ color: "#20C997" }}>pune </span>
          </h5>
        </div>
        <div
          className="p-3 my-3 rounded-4"
          style={{ backgroundColor: "#111418" }}
        >
          <h3 style={{ fontWeight: 600 }}>
            <span style={{ color: "#20C997" }}>Deploma</span> in Computer
            Science
          </h3>
          <p style={{ color: "#999999", margin: 0 }}>2014-2017</p>
          <h5 style={{ fontWeight: 600 }}>
            GES. Katgara polytechnic,{" "}
            <span style={{ color: "#20C997" }}>bordy</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Education;
