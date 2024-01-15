import React from "react";
import Logo from "../path/tobeto-logo.png";
import ProfileLogo from "../path/tobeto-profile-logo.png";
import "./NavbarDesign.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-xxl py-4 mb-4 bg-white">
      <div className="container-fluid">
        <Link to="/">
          <span className="tobetoImage">
            <span>
              <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg'%20version='1.1'%20width='170'%20height='35'/>" />
            </span>
            <img className="logo" src={Logo} />
          </span>
        </Link>
        <ul className="d-none d-xxl-flex navbar-nav gap-3">
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
            <div className="header-avatar ">
              <div className="me-2 d-flex align-items-center justify-content-center">
                <span>
                  <img
                    src="https://pbs.twimg.com/profile_images/1697250796906348546/JAYDV2ix_400x400.jpg"
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
                    <Dropdown.Item onClick={() => navigate("/profilim")}>
                      Profil Bilgileri
                    </Dropdown.Item>
                    <Dropdown.Item>Oturumu Kapat</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
