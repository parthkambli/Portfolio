import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./SideMenu";

const OffCanvasMenu = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    if (window.innerWidth <= 992) {
      // 768px is the breakpoint for medium screens
      setIsOffCanvasOpen(!isOffCanvasOpen);
    }
  };

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  return (
    <div className="position-sticky top-0 z-1">
      <button
        className="btn btn-sm outlineBtn d-inline-block d-lg-none m-2"
        type="button"
        onClick={toggleOffCanvas}
      >
        <AiOutlineMenu className="fs-4" />
      </button>

      <div
        className={`offcanvas offcanvas-start ${isOffCanvasOpen ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ backgroundColor: "#111418" }}
      >
        <div className="offcanvas-body p-2 vh100">
          <button
            type="button"
            className="btn btn-sm outlineBtn float-end m-2"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <AiOutlineClose className="fs-4" />
          </button>
          <SideMenu onClose={closeOffCanvas} />
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
