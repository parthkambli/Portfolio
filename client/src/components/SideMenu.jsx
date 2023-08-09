import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ProfilePicture from "../assets/PK.png";

const SideMenu = ({ onClose }) => {
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
            onClick={() => {
              if (window.innerWidth <= 992) {
                onClose(); // Call the onClose function to close the offcanvas
              }
            }}
          >
            Home
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#About"
            onClick={() => {
              if (window.innerWidth <= 992) {
                onClose(); // Call the onClose function to close the offcanvas
              }
            }}
          >
            About
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Skills"
            onClick={() => {
              if (window.innerWidth <= 992) {
                onClose(); // Call the onClose function to close the offcanvas
              }
            }}
          >
            Skills
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Education"
            onClick={() => {
              if (window.innerWidth <= 992) {
                onClose(); // Call the onClose function to close the offcanvas
              }
            }}
          >
            Education
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Projects"
            onClick={() => {
              if (window.innerWidth <= 992) {
                onClose(); // Call the onClose function to close the offcanvas
              }
            }}
          >
            Projects
          </a>
          <a
            className="nav-link py-1 text-white"
            style={{ fontWeight: 300 }}
            href="#Contact"
            onClick={() => {
              if (window.innerWidth <= 992) {
                onClose(); // Call the onClose function to close the offcanvas
              }
            }}
          >
            Contact
          </a>
        </nav>
      </nav>
      <hr className="my-2" />
      <div className="d-flex justify-content-evenly align-items-center px-4">
        <a
          href="https://www.instagram.com/kambli.parth/?next=%2F"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaInstagram className="fs-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/parth-kambli-24880613a/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedin className="fs-2" />
        </a>
        <a
          href="https://github.com/parthkambli"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaGithub className="fs-2" />
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
