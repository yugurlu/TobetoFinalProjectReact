import "./LectureDetail.css";
import React, { useState } from "react";
import likeSvg from "../../icons/favorite_FILL1.svg";
import saveSvg from "../../icons/bookmark_FILL1.svg";
import unsaveSvg from "../../icons/bookmark_FILL0.svg";
import unlikeSvg from "../../icons/favorite_FILL0_wght100.svg";
import LectureDetailSidebar from "../../components/LectureDetailSidebar/LectureDetailSidebar";
import LectureContent from "../../components/LectureContent/LectureContent"
import LectureInfo from "../../components/LectureInfo/LectureInfo"

function LectureDetail() {
  const [showDetail, setShowDetail] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [section, setSection] = useState(0);

  return (
    <div className="lecture">
      <div class={`lecture-detail container ${showDetail && "blur"}`}>
        <div class="lecture-activity">
          <div class="row">
            <div class="col-lg-1 col-sm-2 mt-2 col-12">
              <img
                class="lecture-img"
                src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
              ></img>
            </div>
            <div class="col-lg-11 col-md-11 col-sm-10 col-xs-12">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="lecture-info">
                    <h3>.NET & React Fullstack | Öğrenme Yolculuğu</h3>
                  </div>
                  <div className="date-info text-dark-blue">
                    <span>29 Şubat 2024 tarihine kadar bitirebilirsin</span>
                  </div>
                </div>
                <div className="actions d-flex">
                  <div className="like-actions ">
                    <div className="like" onClick={() => setLiked(!liked)}>
                      <img src={liked === false ? unlikeSvg : likeSvg}></img>
                    </div>
                  </div>
                  <div className="save-actions">
                    <div className="save" onClick={() => setSaved(!saved)}>
                      <img src={saved === false ? unsaveSvg : saveSvg}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lecture-content">
          <div className="col-12 mb-4">
            <ul className="nav nav-tabs mainTablist" role="tablist">
              <li className="nav-item">
                <button className="nav-link" onClick={() => setSection(0)}>
                  İçerik
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setSection(1)}>
                  Hakkında
                </button>
              </li>
            </ul>
          </div>
        </div>
        {section === 0 && <LectureContent setShowDetail={setShowDetail} />}
        {section === 1 && <LectureInfo />}
      </div>
      {showDetail === true && (
        <LectureDetailSidebar setShowDetail={setShowDetail} />
      )}
    </div>
  );
}

export default LectureDetail;
