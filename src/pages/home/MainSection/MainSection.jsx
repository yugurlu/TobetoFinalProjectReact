import React, { useEffect, useState } from "react";
import "./MainSection.css";
import LectureService from "../../../services/LectureService";
import { Lecture } from "../../../components/Lecture/lecture";
import Announcement from "../../../components/Announcements/Announcement";
import { Link, useNavigate } from "react-router-dom";
import AppealService from "../../../services/AppealService";
import AnnouncementService from "../../../services/AnnouncementService";
import ExamService from "../../../services/ExamService";
import SurveyService from "../../../services/SurveyService";
import Appeal from "../../../components/Appeal/appeal";
import Exam from "../../../components/Exams/exam";

function MainSection() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    exams: [],
    announcements: [],
    appeals: [],
    lectures: [],
    surveys: [],
  });

  const [section, setSection] = useState(0);

  useEffect(() => {
    // axiosData("lectures", LectureService.getAll);
    // axiosData("appeals", AppealService.getAll);
    // axiosData("announcements", AnnouncementService.getAll);
    // axiosData("exams", ExamService.getAll);
    // axiosData("surveys", SurveyService.getAll);
  }, []);

  const axiosData = async (key, service) => {
    await service().then((response) => {
      setData((prevData) => ({ ...prevData, [key]: response.data.items }));
    });
  };

  return (
    <section>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row cv-box cv-padding display-flex mmt-n-4 main-section">
          <div className="col-12 ik-logo-platform">
            <div className="p-4">
              <span className="tobeto-main-logo">
                <img src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" />
              </span>
            </div>
            <div className="mt-2 d-flex flex-column justify-content-center px-10 text-center">
              <span className="header-text-md mt-4 ">
                Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
              </span>
              <span className="header-text mt-4 mb-4">
                Aradığın
                <span className="quot">&nbsp; “</span>
                İş
                <span className="quot">” &nbsp; </span>
                Burada!
              </span>
            </div>
          </div>
          <div className="col-12 mb-4">
            <ul className="nav nav-tabs mainTablist" role="tablist">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(0);
                  }}
                >
                  Başvurularım
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(1);
                  }}
                >
                  Eğitimlerim
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(2);
                  }}
                >
                  Duyuru ve Haberlerim
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link "
                  onClick={() => {
                    setSection(3);
                  }}
                >
                  Anketlerim
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link "
                  onClick={() => {
                    setSection(4);
                  }}
                >
                  Sınavlarım
                </button>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="tab-content">
              {section == 0 && (
                <div class="tab-pane fade show active">
                  <div className="row justify-content-center gap-5">
                    <Appeal />
                    <Appeal />
                    {data.appeals.map((appeal) => (
                      <Appeal />
                    ))}
                  </div>
                  <a
                    class="showMoreBtn"
                    onClick={() => {
                      navigate("/basvurularim", { state: data.appeals });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 1 && (
                <div class="tab-pane fade show active">
                  <div className="grid-container">
                    <Lecture></Lecture>
                    <Lecture></Lecture>
                    <Lecture></Lecture>
                    <Lecture></Lecture>
                    {data.lectures.map((lecture) => {
                      return <Lecture lecture={lecture} />;
                    })}
                  </div>
                  <a
                    class="showMoreBtn"
                    onClick={() => {
                      navigate("/egitimlerim", { state: data.lectures });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 2 && (
                <div class="tab-pane fade show active">
                  <div className="row">
                    <Announcement></Announcement>
                    <Announcement></Announcement>
                    <Announcement></Announcement>
                    {data.announcements.map((announcement) => (
                      <Announcement announcement={announcement} />
                    ))}
                  </div>
                  <a
                    class="showMoreBtn"
                    onClick={() => {
                      navigate("/duyurularim", { state: data.announcements });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 3 && (
                <div class="tab-pane fade show active">
                  <div className="row justify-content-center gap-5"></div>
                  <a
                    class="showMoreBtn"
                    onClick={() => {
                      navigate("/anketlerim", { state: data.surveys });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 4 && (
                <div class="tab-pane fade show active">
                  <div className="row justify-content-center gap-5">
                    <Exam />
                    <Exam />
                  </div>
                  <a
                    class="showMoreBtn"
                    onClick={() => {
                      navigate("/sinavlarim", { state: data.exams });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
