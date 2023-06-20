import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import Skills from "./components/Skills";
import "./index.css";

const App = () => {
  return (
    <div className="row m-0">
      <div className="col-3" style={{ backgroundColor: "#111418" }}>
        <div className="position-sticky top-0 vh100 overflow-y-auto">
          <SideMenu />
        </div>
      </div>
      <div className="col-9">
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          className="scrollspy-example-2 text-white px-4"
          tabIndex="0"
        >
          <div id="Home" className="vh-100 d-flex align-items-center">
            <Home />
          </div>
          <div id="About" className="vh-100 d-flex align-items-center">
            <About />
          </div>
          <div id="Skills" className="vh-100 d-flex align-items-center">
            <Skills />
          </div>
          <div id="Education" className="vh-100 d-flex align-items-center">
            <Education />
          </div>
          <div id="Projects" className="vh-100 d-flex align-items-center">
            <Projects />
          </div>
          <div id="Contact" className="vh-100 d-flex align-items-center">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
