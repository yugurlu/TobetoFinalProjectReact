import "./Certificates.css";
import { useRef } from "react";
import uploadSvg from "../../../icons/cloud_upload_FILL0.svg";

function Certificates() {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="certificates">
      <div className="row">
        <div className="col-12 mb-6">
          <h5>Sertifikalarim</h5>
          <div
            className="upload-area d-flex  flex-column align-items-center justify-content-center gap-3"
            onClick={handleImageClick}
          >
            <div className="upload-img">
              <img src={uploadSvg}></img>
              <input
                type="file"
                accept="application/pdf"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
            <span>Dosya Yukle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
