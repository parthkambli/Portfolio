import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./SideMenu";

const OffCanvasMenu = () => {
  return (
    <div className="position-sticky top-0">
      <button
        className="btn btn-sm outlineBtn d-inline-block d-lg-none m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <AiOutlineMenu className="fs-4" />
      </button>

      <div
        className="offcanvas offcanvas-start"
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
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
