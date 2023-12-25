import React from "react";
import "./lecture.css"

export const Lecture = (props) => {
  return (
    <div class="col-md-3 col-12 mb-4">
      <div class="edu-card">
        <img
          class="card-img"
          src="https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg"
        ></img>
        <div class="card-content">
          <div class="d-flex flex-column">
            <span>Eğitimlere Nasıl Katılırım?</span>
            <span class="platform-course-date">8 Eylül 2023 17:06</span>
          </div>
          <a class="apply-btn">Eğitime Git</a>
        </div>
      </div>
    </div>
  );
};
