import { useState } from "react";
import ProfilePicture from "../assets/PK.png";

const SideMenu = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="container text-white text-center p-4">
      <img src={ProfilePicture} alt="" className="img-fluid" />
      <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: "400" }}>
        Parth Kambli
      </h1>
      <hr className="my-2" />
      <nav
        id="navbar-example3"
        className="h-100 flex-column align-items-stretch pe-4"
      >
        <nav className="nav nav-pills flex-column text-decoration-none">
          <a
            className="nav-link py-1 text-white"
            href="#Home"
            onClick={() => setActive("Home")}
          >
            Home
          </a>
          <a
            className="nav-link py-1 text-white"
            href="#About"
            onClick={() => setActive("About")}
          >
            About
          </a>
          <a
            className="nav-link py-1 text-white"
            href="#Skills"
            onClick={() => setActive("Skills")}
          >
            Skills
          </a>
          <a
            className="nav-link py-1 text-white"
            href="#Education"
            onClick={() => setActive("Education")}
          >
            Education
          </a>
          <a
            className="nav-link py-1 text-white"
            href="#Projects"
            onClick={() => setActive("Projects")}
          >
            Projects
          </a>
          <a
            className="nav-link py-1 text-white"
            href="#Contact"
            onClick={() => setActive("Contact")}
          >
            Contact
          </a>
        </nav>
      </nav>
      <hr className="my-2" />
      {console.log(active)}
    </div>
  );
};

export default SideMenu;
