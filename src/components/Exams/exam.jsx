import React from "react";
import "./exam.css";

const Exam = () => {
  return (
    <div className="col-md-5 mb-4 ms-5 d-flex exam-card">
      <div className="exam-content">
        <span className="exam-name">
          Herkes için Kodlama 2C Değerlendirme Sınavı
        </span>
        <span className="lesson-name">
          Herkes İçin Kodlama - 2C
          </span>
        <span className="exam-time">
          45 Dakika
        </span>
      </div>
    </div>
  );
};

export default Exam;
