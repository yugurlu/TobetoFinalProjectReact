import "./Profile.css";
import { useState } from "react";
import eduSvg from "../../icons/school_FILL0.svg";
import profileSvg from "../../icons/person_FILL0.svg";
import bagSvg from "../../icons/work_FILL0_wght300.svg";
import settingsSvg from "../../icons/settings_FILL0.svg";
import languageSvg from "../../icons/translate_FILL0.svg";
import socialSvg from "../../icons/public_FILL0_wght300.svg";
import achievementSvg from "../../icons/editor_choice_FILL0.svg";
import certificateSvg from "../../icons/card_membership_FILL0.svg";
import ProfileSidebarElement from "../../components/ProfileSidebarElement/ProfileSidebarElement";
import PersonalInformations from "../../components/Profile/PersonalInformations/PersonalInformations";
import Experiences from "../../components/Profile/Experiences/Experiences";
import Education from "../../components/Profile/Education/Education";
import Skills from "../../components/Profile/Skills/Skills";
import Certificates from "../../components/Profile/Certificates/Certificates";

function Profile() {
  const [section, setSection] = useState(1);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="side-menu">
            <ProfileSidebarElement
              element={1}
              setState={setSection}
              svg={profileSvg}
              header="Kisisel Bilgilerim"
            />
            <ProfileSidebarElement
              element={2}
              setState={setSection}
              svg={bagSvg}
              header="Deneyimlerim"
            />
            <ProfileSidebarElement
              element={3}
              setState={setSection}
              svg={eduSvg}
              header="Egitim Hayatim"
            />
            <ProfileSidebarElement
              element={4}
              setState={setSection}
              svg={achievementSvg}
              header="Yetkinliklerim"
            />
            <ProfileSidebarElement
              element={5}
              setState={setSection}
              svg={certificateSvg}
              header="Sertifikalarim"
            />
            <ProfileSidebarElement
              element={6}
              setState={setSection}
              svg={socialSvg}
              header="Medya Hesaplarim"
            />
            <ProfileSidebarElement
              element={7}
              setState={setSection}
              svg={languageSvg}
              header="Yabanci Dillerim"
            />
            <ProfileSidebarElement
              element={8}
              setState={setSection}
              svg={settingsSvg}
              header="Ayarlar"
            />
          </div>
        </div>
        <div className="col-11 col-lg-8" style={{ minHeight: "72vh" }}>
          {section === 1 && <PersonalInformations />}
          {section === 2 && <Experiences />}
          {section === 3 && <Education />}
          {section === 4 && <Skills />}
          {section === 5 && <Certificates />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
