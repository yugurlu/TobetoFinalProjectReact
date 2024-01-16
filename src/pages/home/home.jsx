import React from "react";
import "./home.css";
import MainSection from "./MainSection/MainSection";
import InfoCard from "../../components/InfoCard/InfoCard";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  var userInfo = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div>
      <div className="welcome-message container text-center">
        <h3 className="spans-elements">
          <span className="tobete-text-secondary">TOBETO</span>
          <span className="sub-text-name">
            'ya hoş geldin <br /> {userInfo.name}
          </span>
        </h3>
        <div>
          <h4>
            <p>
              Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
              yanında!
            </p>
          </h4>
        </div>
      </div>
      <MainSection />
      <section>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="info-card-list row col-9 d-flex align-items-center justify-content-center mt-5 mb-5">
            <InfoCard
              background="background-1"
              header="Profilini oluştur"
              onClick={() => navigate("/profilim")}
            />
            <InfoCard
              background="background-2"
              header="Kendini değerlendir"
              onClick={null}
            />
            <InfoCard
              background="background-3"
              header="Öğrenmeye başla"
              onClick={() => navigate("/egitimlerim")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
