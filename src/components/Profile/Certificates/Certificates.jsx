import "./Certificates.css";
import uploadSvg from "../../../icons/cloud_upload_FILL0.svg";

function Certificates() {
  return (
    <div className="certificates">
      <div className="row">
        <div className="col-12 mb-6">
          <h5>Sertifikalarim</h5>
          <div className="upload-area d-flex  flex-column align-items-center justify-content-center gap-3">
            <div className="upload-img">
              <img src={uploadSvg}></img>
            </div>
            <span>Dosya Yukle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
