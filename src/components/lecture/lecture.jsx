import React from "react";
import "./lecture.css";

export const Lecture = (props) => {
  return (
    <div class="d-flex align-items-center justify-content-center">
      <div class="edu-card">
        <img
          class="card-imgg"
          src=""
        ></img>
        <div class="card-content">
          <div class="d-flex flex-column">
            <span></span>
            <span class="platform-course-date"></span>
          </div>
          <a class="apply-btn">Eğitime Git</a>
        </div>
      </div>
    </div>
  );
};
