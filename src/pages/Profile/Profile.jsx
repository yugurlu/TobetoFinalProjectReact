import "./Profile.css";
import eduSvg from "../../icons/school_FILL0.svg";
import bagSvg from "../../icons/work_FILL0_wght300.svg";
import profileSvg from "../../icons/person_FILL0.svg";

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="side-menu">
            <a class="btn mb-2 text-start w-100">
              <img src={profileSvg}></img>
              <span class="sidemenu-text"> Kişisel Bilgilerim</span>
            </a>
            <a class="btn mb-2 text-start w-100">
              <img src={bagSvg}></img>
              <span class="sidemenu-text"> Deneyimlerim</span>
            </a>
            <a class="btn mb-2 text-start w-100">
              <img src={eduSvg}></img>
              <span class="sidemenu-text"> Egitim Hayatim</span>
            </a>
            <a class="btn mb-2 text-start w-100">
              <span class="sidemenu-text"> Yetkinliklerim</span>
            </a>
            <a class="btn mb-2 text-start w-100">
              <span class="sidemenu-text"> Sertifikalarim</span>
            </a>
            <a class="btn mb-2 text-start w-100">
              <span class="sidemenu-text"> Medya Hesaplarim</span>
            </a>
            <a class="btn mb-2 text-start w-100">
              <span class="sidemenu-text"> Yabanci Dillerim</span>
            </a>
            <a class="btn mb-2 text-start w-100">
              <span class="sidemenu-text"> Ayarlar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
