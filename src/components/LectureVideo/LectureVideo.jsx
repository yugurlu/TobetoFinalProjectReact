import "./LectureVideo.css";
import ReactPlayer from "react-player";

function LectureVideo() {
  return (
    <div className="lecture-video align-content-center">
      <div
        style={{
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          overflow: "hidden",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=19Fp-qLvJuA"
          width="100%"
        />
      </div>
      <div className="lecture-video-detail d-flex align-items-center">
        <div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
          <div className="video-title">
            <strong>Sorularla Sorgu Çalışmaları - 3</strong>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <text style={{ color: "grey" }}>Video - 10 dk</text>
            </div>
            <div>
              <text>1.4 Puan</text>
            </div>
            <div>
              <span>Devam ediyor</span>
            </div>
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
