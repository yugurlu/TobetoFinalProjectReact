import "./LectureVideo.css";
import ReactPlayer from "react-player";

function LectureVideo() {
  return (
    <div className="lecture-video">
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
          style={{ minHeight: "300px" }}
        />
      </div>
      <div className="lecture-video-detail">
        <div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
          <div>
            <strong>Sorularla Sorgu Çalışmaları - 3</strong>
          </div>
          <div className="d-flex">
            <div>
              <text>Video - 10 dk</text>
            </div>
            <div>
              <text>1.1 Puan</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LectureVideo;
