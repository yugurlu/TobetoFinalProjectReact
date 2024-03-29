import "./LectureInfo.css";
import calenderIcon from "../../icons/event_note_FILL0.svg";
import timerIcon from "../../icons/timer_FILL0_wght100.svg";
import categoryIcon from "../../icons/sell_FILL0.svg";
import docIcon from "../../icons/description_FILL0.svg";
import bagIcon from "../../icons/work_FILL0_wght100.svg";

function LectureInfo() {
  return (
    <div className="lecture-info">
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src={calenderIcon}></img>
            <strong> Başlangıç</strong>
          </div>
          <text>27 EKİ 2023 14:52</text>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: "28px" }}
        >
          <div>
            <strong> Bitiş</strong>
          </div>
          <text>29 ŞUB 2024 23:59</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src={timerIcon}></img>
            <strong> Geçirdiğin Süre</strong>
          </div>
          <text>5 sa 26 dk</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src={timerIcon}></img>
            <strong> Tahmini Süre</strong>
          </div>
          <text>65 g 36 sa 30 dk</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src={categoryIcon}></img>
            <strong> Kategori</strong>
          </div>
          <text>Genel</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src={docIcon}></img>
            <strong> İçerik</strong>
          </div>
          <text>65 Video</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src={bagIcon}></img>
            <strong> Üretici Firma</strong>
          </div>
          <text>Enocta</text>
        </div>
      </div>
    </div>
  );
}

export default LectureInfo;
