import "./LectureDetailSidebar.css";
import timerIcon from "../../timer_FILL0_wght300_GRAD0_opsz24.svg";
import viewIcon from "../../visibility_FILL0_wght300_GRAD0_opsz24.svg";
import unlikeSvg from "../../favorite_FILL0_wght300_GRAD0_opsz24.svg";
import likeSvg from "../../favorite_FILL1_wght400_GRAD0_opsz24.svg";
import moreSvg from "../../more_horiz_FILL1_wght300_GRAD0_opsz24.svg";
import { useState } from "react";

function LectureDetailSidebar() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="lecture-detail-sidebar">
      <div className="container">
        <div className="row mt-4">
          <div class="col-lg-1 col-md-2 col-sm-2">
            <img
              class="lecture-img"
              src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
            ></img>
          </div>
          <div class="col-sm-10 col-xs-12">
            <div className="d-flex justify-content-between">
              <div className="lecture-info">
                <h3>.NET & React Fullstack | Öğrenme Yolculuğu</h3>
                <div className="d-flex align-items-center gap-3">
                  <div className="content-type">
                    <span>VIDEO</span>
                  </div>
                  <div className="content-time d-flex align-items-center">
                    <img className="time-img" src={timerIcon}></img>
                    <strong>7 dk</strong>
                  </div>
                  <div class="content-views">
                    <img className="views-img" src={viewIcon}></img>
                    <strong>16</strong>
                  </div>
                </div>
                <div>
                  <img
                    className="content-like"
                    src={liked === false ? unlikeSvg : likeSvg}
                    onClick={() => setLiked(!liked)}
                  ></img>
                </div>
              </div>
              <div className="row gap-4">
                <div className="d-flex gap-2 align-items-center">
                  <div>
                    <button
                      className="content-detail-button"
                      onClick={() => console.log("asd")}
                    >
                      <strong>EGITIME GIT</strong>
                    </button>
                  </div>
                  <div className="more-button">
                    <img src={moreSvg}></img>
                  </div>
                </div>
                <div className="d-flex gap-5">
                  <div>
                    <text>Devam Ediyor</text>
                  </div>
                  <div>
                    <strong>0.9 Puan</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LectureDetailSidebar;
