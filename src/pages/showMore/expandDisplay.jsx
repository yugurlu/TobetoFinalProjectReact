import React from "react";
import "./ExpandDisplays.css";

function ExpandDisplay(props) {
  return (
    <main>
      <div className="container-fluid">
        <div class="page-banner-card">
          <div class="container">
            <div class="row">
              <span>{props.name}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container expandDisplay-container">
        <div className="row">
          {props.elemnts ?  props.elemnts.map() : null}
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
      </div>
    </main>
  );
}

export default ExpandDisplay;
