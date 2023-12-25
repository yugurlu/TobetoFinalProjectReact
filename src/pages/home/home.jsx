import React from "react";
import { Navbar } from "../../layouts/Navbar/navbar";
import "./home.css";
import MainSection from "./MainSection/MainSection";
import Footer from "./footer/Footer";

export const Home = () => {
  var userInfo = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <Navbar />
      <div className="welcome-message container text-center">
        <div>
          <div>
            <h3 className="spans-elements">
              <span className="tobete-text-secondary">TOBETO</span>
              <span className="sub-text-name">'ya hoş geldin <br /> {userInfo.name}
              </span>
            </h3>
          </div>
          <div>
            <h4>
              <p>
                Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!
              </p>
            </h4>
          </div>
        </div>
      </div>
      <MainSection />
      <Footer/>
    </div>
  );
};
