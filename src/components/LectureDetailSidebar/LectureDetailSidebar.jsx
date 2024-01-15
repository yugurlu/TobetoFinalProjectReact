import "./LectureDetailSidebar.css";
import timerIcon from "../../icons/timer_FILL0_wght100.svg";
import likeSvg from "../../icons/favorite_FILL1.svg";
import categoryIcon from "../../icons/sell_FILL0.svg";
import publicIcon from "../../icons/public_FILL0.svg";
import moreSvg from "../../icons/more_horiz_FILL1.svg";
import viewIcon from "../../icons/visibility_FILL0.svg";
import subCategoryIcon from "../../icons/crossword_FILL0.svg";
import unlikeSvg from "../../icons/favorite_FILL0_wght100.svg";
import bagIcon from "../../icons/work_FILL0_wght100.svg";
import { useState } from "react";

function LectureDetailSidebar({ setShowDetail }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="lecture-detail-sidebar">
      <div className="container">
        <div className="row mt-4">
          <div className="d-flex justify-content-between gap-5">
            <div class="content-img col-lg-1 col-md-2 col-sm-2">
              <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
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
          <div className="content-info"></div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src={categoryIcon}></img>
                <strong> Kategori</strong>
              </div>
              <strong>İş'te Mükemmellik / Programlama</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src={publicIcon}></img>
                <strong> Dili</strong>
              </div>
              <strong>Türkçe</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src={subCategoryIcon}></img>
                <strong> Alt Tip</strong>
              </div>
              <strong>Konu Uzman Videosu</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src={bagIcon}></img>
                <strong> Uretici Firma</strong>
              </div>
              <strong>Enocta</strong>
            </div>
          </div>
          <div>
            <div>
              <strong>Icerik</strong>
            </div>
            <text>Bu Bölümde Axios ile Veri Çekme İşlemini Öğreneceğiz.</text>
          </div>
        </div>
      </div>
      <button className="close-button" onClick={() => setShowDetail(false)}>
        X
      </button>
    </div>
  );
}

export default LectureDetailSidebar;
