import React from "react";
import "./lecture.css";
import { Link, useNavigate } from "react-router-dom";

export const Lecture = (props) => {
  const navigate = useNavigate();
  return (
    <div class="d-flex align-items-center justify-content-center">
      <div class="edu-card">
        <img class="card-imgg" src={""}></img>
        <div class="card-content">
          <div class="d-flex flex-column">
            <span>{"props.lecture.lectureName"}</span>
            <span class="platform-course-date">{}</span>
          </div>

          <a class="apply-btn" onClick={() => navigate("ders-detay/" + 123)}>
            Eğitime Git
          </a>
        </div>
      </div>
    </div>
  );
};
