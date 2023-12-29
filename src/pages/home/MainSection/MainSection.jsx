import React, { useEffect, useState } from "react";
import "./MainSection.css";
import LectureService from "../../../services/LectureService";
import { Lecture } from "../../../components/lecture/lecture";
import Announcement from "../../../components/Announcements/Announcement";
import { Link } from "react-router-dom";
import AppealService from "../../../services/AppealService";
import AnnouncementService from "../../../services/AnnouncementService";
import ExamService from "../../../services/ExamService";
import SurveyService from "../../../services/SurveyService";

function MainSection() {
  const [exams, setExams] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [appeals, setAppeals] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [section, setSection] = useState(0);

  useEffect(() => {
    getLectures();
    //getAppeals();
    //getAnnouncements();
    //getExams();
    //getSurveys();
  }, []);

  const getLectures = async () => {
    await LectureService.getAll().then((response) => {
      setLectures(response.data.items);
      console.log(response.data.items);
    });
  };

  const getAppeals = async () => {
    await AppealService.getAll().then((response) => {
      setAppeals(response.data.items);
      console.log(response.data.items);
    });
  };

  const getAnnouncements = async () => {
    await AnnouncementService.getAll().then((response) => {
      setAnnouncements(response.data.items);
      console.log(response.data.items);
    });
  };

  const getExams = async () => {
    await ExamService.getAll().then((response) => {
      setExams(response.data.items);
      console.log(response.data.items);
    });
  };

  const getSurveys = async () => {
    await SurveyService.getAll().then((response) => {
      setSurveys(response.data.items);
      console.log(response.data.items);
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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(0);
                  }}
                >
                  Başvurularım
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(1);
                  }}
                >
                  Eğitimlerim
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(2);
                  }}
                >
                  Duyuru ve Haberlerim
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  onClick={() => {
                    setSection(3);
                  }}
                >
                  Anketlerim
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  onClick={() => {
                    setSection(3);
                  }}
                >
                  Sınavlarım
                </button>
              </li>
            </ul>
          </div>
          <div className="col-16">
            <div className="tab-content">
              {section == 0 && (
                <div class="tab-pane fade show active">
                  <div className="row">
                    {appeals.map((appeal) => (
                      <></> //APPEAL
                    ))}
                  </div>
                  <a class="showMoreBtn">
                    Daha Fazla Göster <Link to="/basvurularim"></Link>
                  </a>
                </div>
              )}
              {section == 1 && (
                <div class="tab-pane fade show active">
                  <div className="grid-container">
                    {lectures.map((lecture) => {
                      return <Lecture lecture={lecture}></Lecture>;
                    })}
                  </div>
                  <a class="showMoreBtn">
                    Daha Fazla Göster <Link to="/egitimlerim"></Link>
                  </a>
                </div>
              )}
              {section == 2 && (
                <div class="tab-pane fade show active">
                  <div className="row">
                    {announcements.map((announcement) => (
                      <Announcement announcement={announcement}></Announcement>
                    ))}
                  </div>
                  <a class="showMoreBtn">
                    Daha Fazla Göster <Link to="/duyurular"></Link>
                  </a>
                </div>
              )}
              {section == 3 && (
                <div class="tab-pane fade show active">
                  <div className="row"></div>
                  <a class="showMoreBtn">
                    Daha Fazla Göster <Link to="/anketler"></Link>
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
