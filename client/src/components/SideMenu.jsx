import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import ProfilePicture from "../assets/PK.png";

const SideMenu = () => {
  return (
    <div className="container text-white text-center min-vh-100 d-flex flex-column justify-content-evenly p-2">
      <div className="px-4">
        <img src={ProfilePicture} alt="" className="img-fluid" />
        <h1
          style={{ fontFamily: "Playfair Display, serif", fontWeight: "400" }}
        >
          Parth Kambli
        </h1>
      </div>
      <hr className="my-2" />
      <nav
        id="navbar-example3"
        className="h-100 flex-column align-items-stretch"
      >
        <nav className="nav nav-pills flex-column text-decoration-none">
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Home"
          >
            Home
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#About"
          >
            About
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Skills"
          >
            Skills
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Education"
          >
            Education
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Projects"
          >
            Projects
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Contact"
          >
            Contact
          </a>
        </nav>
      </nav>
      <hr className="my-2" />
      <div className="d-flex justify-content-evenly align-items-center px-4">
        <FaInstagram className="fs-2" />
        <FaLinkedin className="fs-2" />
        <FaGithub className="fs-2" />
        <FaFacebook className="fs-2" />
      </div>
    </div>
  );
};

export default SideMenu;
