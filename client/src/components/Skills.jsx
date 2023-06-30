import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiCanva, SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className="container fw-bold">
      <h1
        className="display-3"
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        <em>
          My<span style={{ color: "#20C997" }}> Skills</span>
        </em>
      </h1>
      <p style={{ textAlign: "justify" }}>
        As a{" "}
        <span style={{ color: "#20C997", fontWeight: 600 }}>
          web developer and designer,
        </span>{" "}
        I possess a diverse range of technical and creative skills that enable
        me to deliver exceptional digital experiences. Here are some of the key
        skills I bring to the table:
      </p>
      <div
        className="row m-2 p-3 rounded-4 d-flex"
        style={{ backgroundColor: "#111418" }}
      >
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <FaHtml5 className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">HTML</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <FaCss3Alt className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">CSS</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <FaJs className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">Java Script</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <FaBootstrap className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">Bootstrap</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <SiCanva className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">Canva</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <FaGithub className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">Github</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <SiMongodb className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">MongoDB</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <SiExpress className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">Express.js</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <FaReact className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">React.js</p>
        </div>
        <div className="mh-50 w-auto px-sm-4 px-2 text-center col">
          <FaNodeJs className="display-1" style={{ color: "#20C997" }} />
          <p className="text-center">Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
