import VideoPlayer from "../VideoPLayer/VideoPlayer";
import "./LectureVideo.css";
import ReactPlayer from "react-player";

function LectureVideo() {
  return (
    <div className="lecture-video align-content-center">
      <div className="video-player">
        <VideoPlayer />
      </div>
      <div className="lecture-video-detail d-flex align-items-center">
        <div
          className="col-lg-9 col-md-8 col-sm-9 col-xs-12"
          style={{ flex: "1" }}
        >
          <div className="video-title">
            <strong>Sorularla Sorgu Çalışmaları - 3</strong>
          </div>
          <div className="d-flex justify-content-between">
            <text style={{ color: "grey" }}>Video - 10 dk</text>
            <text>1.4 Puan</text>
            <span>Devam ediyor</span>
          </div>
        </div>
        <div>
          <button className="detail-button">
            <strong>DETAY</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LectureVideo;
