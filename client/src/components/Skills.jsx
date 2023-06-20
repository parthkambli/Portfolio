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
    <div className="container px-5 fw-bold">
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
      <p>
        As a{" "}
        <span style={{ color: "#20C997", fontWeight: 600 }}>
          web developer and designer,
        </span>{" "}
        I possess a diverse range of technical and creative skills that enable
        me to deliver exceptional digital experiences. Here are some of the key
        skills I bring to the table:
      </p>
      <div
        className="row m-2 p-2 rounded-4 d-flex justify-content-evenly"
        style={{ backgroundColor: "#111418" }}
      >
        <div className="w-auto h-50 p-2">
          <FaHtml5 size={100} style={{ color: "#20C997" }} />
          <p className="text-center">HTML</p>
        </div>
        <div className="w-auto h-50 p-2">
          <FaCss3Alt size={100} style={{ color: "#20C997" }} />
          <p className="text-center">CSS</p>
        </div>
        <div className="w-auto h-50 p-2">
          <FaJs size={100} style={{ color: "#20C997" }} />
          <p className="text-center">Java Script</p>
        </div>
        <div className="w-auto h-50 p-2">
          <FaBootstrap size={100} style={{ color: "#20C997" }} />
          <p className="text-center">Bootstrap</p>
        </div>
        <div className="w-auto h-50 p-2">
          <SiCanva size={100} style={{ color: "#20C997" }} />
          <p className="text-center">Canva</p>
        </div>
        <div className="w-auto h-50 p-2">
          <FaGithub size={100} style={{ color: "#20C997" }} />
          <p className="text-center">Github</p>
        </div>
        <div className="w-auto h-50 p-2">
          <SiMongodb size={100} style={{ color: "#20C997" }} />
          <p className="text-center">MongoDB</p>
        </div>
        <div className="w-auto h-50 p-2">
          <SiExpress size={100} style={{ color: "#20C997" }} />
          <p className="text-center">Express.js</p>
        </div>
        <div className="w-auto h-50 p-2">
          <FaReact size={100} style={{ color: "#20C997" }} />
          <p className="text-center">React.js</p>
        </div>
        <div className="w-auto h-50 p-2">
          <FaNodeJs size={100} style={{ color: "#20C997" }} />
          <p className="text-center">Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
