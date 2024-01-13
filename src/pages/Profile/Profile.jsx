import "./Profile.css";
import eduSvg from "../../icons/school_FILL0.svg";
import bagSvg from "../../icons/work_FILL0_wght300.svg";
import profileSvg from "../../icons/person_FILL0.svg";
import achievementSvg from "../../icons/editor_choice_FILL0.svg";
import certificateSvg from "../../icons/card_membership_FILL0.svg";
import socialSvg from "../../icons/public_FILL0_wght300.svg";
import languageSvg from "../../icons/translate_FILL0.svg";
import settingsSvg from "../../icons/settings_FILL0.svg";
import ProfileSidebarElement from "../../components/ProfileSidebarElement/ProfileSidebarElement";
import PersonalInformations from "../../components/Profile/PersonalInformations/PersonalInformations";

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="side-menu">
            <ProfileSidebarElement svg={profileSvg} header="Kisisel Bilgilerim"/>
            <ProfileSidebarElement svg={bagSvg} header="Deneyimlerim"/>
            <ProfileSidebarElement svg={eduSvg} header="Egitim Hayatim"/>
            <ProfileSidebarElement svg={achievementSvg} header="Yetkinliklerim"/>
            <ProfileSidebarElement svg={certificateSvg} header="Sertifikalarim"/>
            <ProfileSidebarElement svg={socialSvg} header="Medya Hesaplarim"/>
            <ProfileSidebarElement svg={languageSvg} header="Yabanci Dillerim"/>
            <ProfileSidebarElement svg={settingsSvg} header="Ayarlar"/>
          </div>
        </div>
        <div className="col-12 col-lg-9">
            <PersonalInformations/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
