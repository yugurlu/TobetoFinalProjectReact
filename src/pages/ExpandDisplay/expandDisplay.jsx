import React from "react";
import "./expandDisplay.css";
import { useLocation } from "react-router-dom";
import { Lecture } from "../../components/lecture/lecture";
import Appeal from "../../components/Appeal/appeal";
import { Announcement } from "@mui/icons-material";
import Exam from "../../components/Exams/exam";
import { Navbar } from "../../layouts/Navbar/navbar";

function ExpandDisplay() {
  const location = useLocation();
  const items = location.state;

  const componentsSelector = (item) => {
    if (location.pathname == "/egitimlerim") return <Lecture lecture={item}/>;
    else if (location.pathname == "/basvurularim") return <Appeal />;
    else if (location.pathname == "/duyurlarim") return <Announcement />;
    else if (location.pathname == "/sinavlarim") return <Exam />;
  };

  return (
    <main>
      <Navbar/>
      <div className="container-fluid">
        <div class="page-banner-card">
          <div class="container">
            <div class="row">
              <span>
                {location.pathname.charAt(1).toUpperCase() +
                  location.pathname.replace("/", "").slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container expandDisplay-container">
        <div className="items">
          {items
            ? items.map((item) => {
                return componentsSelector(item);
              })
            : null}
        </div>
        <ul
          class="pagination justify-content-center"
          role="navigation"
          aria-label="Pagination"
        >
          <li class="page-item disabled">
            <a
              class="page-link "
              tabindex="-1"
              role="button"
              aria-disabled="true"
              aria-label="Previous page"
              rel="prev"
            ></a>
          </li>
          <li class="page-item active">
            <a
              rel="canonical"
              role="button"
              class="page-link"
              tabindex="-1"
              aria-label="Page 1 is your current page"
              aria-current="page"
            >
              1
            </a>
          </li>
          <li class="page-item">
            <a
              rel="next"
              role="button"
              class="page-link"
              tabindex="0"
              aria-label="Page 2"
            >
              2
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              tabindex="0"
              role="button"
              aria-disabled="false"
              aria-label="Next page"
              rel="next"
            ></a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default ExpandDisplay;
