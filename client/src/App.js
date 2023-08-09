import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import OffCanvasMenu from "./components/OffCanvasMenu";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import Skills from "./components/Skills";
import "./index.css";

const App = () => {
  return (
    <div className="row m-0">
      <div
        className="d-lg-block d-none col-lg-3"
        style={{ backgroundColor: "#111418" }}
      >
        <div className="position-sticky top-0 vh100 overflow-y-auto">
          <SideMenu />
        </div>
      </div>

      <div className="col-lg-9 p-0">
        <OffCanvasMenu />
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          className="scrollspy-example-2 text-white"
          tabIndex="0"
        >
          <div
            id="Home"
            className="min-vh-100 d-flex align-items-center p-5"
            style={{ backgroundColor: "#212529" }}
          >
            <Home />
          </div>
          <div
            id="About"
            className="min-vh-100 d-flex align-items-center p-5"
            style={{ backgroundColor: "#343a40" }}
          >
            <About />
          </div>
          <div
            id="Skills"
            className="min-vh-100 d-flex align-items-center p-5"
            style={{ backgroundColor: "#212529" }}
          >
            <Skills />
          </div>
          <div
            id="Education"
            className="min-vh-100 d-flex align-items-center p-5"
            style={{ backgroundColor: "#343a40" }}
          >
            <Education />
          </div>
          <div
            id="Projects"
            className="min-vh-100 d-flex align-items-center p-5"
            style={{ backgroundColor: "#212529" }}
          >
            <Projects />
          </div>
          <div
            id="Contact"
            className="min-vh-100 d-flex align-items-center p-5"
            style={{ backgroundColor: "#343a40" }}
          >
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
