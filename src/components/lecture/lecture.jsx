import React from "react";
import "./lecture.css";

export const Lecture = (props) => {
  return (
    <div class="col-md-3">
      <div class="edu-card">
        <img
          class="card-imgg"
          src={props.lecture.lectureImageUrl}
        ></img>
        <div class="card-content">
          <div class="d-flex flex-column">
            <span>{props.lecture.lectureName}</span>
            <span class="platform-course-date">{props.lecture.startDate}</span>
          </div>
          <a class="apply-btn">Eğitime Git</a>
        </div>
      </div>
    </div>
  );
};
