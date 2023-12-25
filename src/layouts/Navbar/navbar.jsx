import React from "react";
import Logo from "../path/tobeto-logo.png";
import ProfileLogo from "../path/tobeto-profile-logo.png";
import NavbarCss from "./NavbarDesign.css";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xxl py-5 bg-white">
      <div className="container-fluid">
        <a href="#">
          <span className="tobetoImage">
            <span>
              <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg'%20version='1.1'%20width='170'%20height='35'/>" />
            </span>
            <img className="logo" src={Logo} />
          </span>
        </a>
        <ul className="d-none d-xxl-flex navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-active">Ana Sayfa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link c-gray-3" href="#">
              Profilim
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link c-gray-3" href="#">
              Değerlendirmeler
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link c-gray-3" href="#">
              Katalog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link c-gray-3" href="#">
              Takvim
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link c-gray-3" href="#">
              İstanbul Kodluyor
            </a>
          </li>
        </ul>
        <div className=" d-xll-block">
          <div className="d-flex justify-space-between align-items-center">
            <div className="mx-3 align-items-center d-flex align-items-center">
              <span className="tbt-gradient"></span>
            </div>
            <div className="btn-group header-avatar">
              <button
                type="button"
                className="btn p-0 fw-normal b-r-35 text-end d-flex align-items-center show"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="me-2">
                  <span>
                    <span>
                      <img
                        className="cv-pp-img rounded-circle"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg'%20version='1.1'%20width='36'%20height='36'/>"
                      />
                    </span>
                    <img
                      src={ProfileLogo}
                      className="cv-pp-img rounded-circle"
                    />
                  </span>
                </div>
                <div className="me-3">
                  <p className="mb-0 name">
                    {JSON.parse(localStorage.getItem("user")).name}{" "}
                    {JSON.parse(localStorage.getItem("user")).lastName}
                  </p>
                </div>
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="Secondary"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Profil Bilgileri
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Oturumu Kapat
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
