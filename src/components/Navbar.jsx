import React from "react";
import "../styles/navbar.css";
import gccImage from "../images/gccImage.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg mt-3">
        <div class="container">
          <img
            src={gccImage}
            alt="gcc_image"
            style={{ width: "180px", height: "auto" }}
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <a class="nav-link fw-bold font-monospace text-dark" href="#">
                  TITLE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold font-monospace text-dark" href="#">
                  ROADMAP
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold font-monospace text-dark" href="#">
                  ICO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold font-monospace text-dark" href="#">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold font-monospace text-dark" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <a href="" className="wallet">
                Connect Wallet Now
              </a>
              <div className="selector">
                <select
                  class="form-select ms-4"
                  aria-label="small select example"
                >
                  <option selected>EN</option>
                  <option value="1">FR</option>
                  <option value="2">DE</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
