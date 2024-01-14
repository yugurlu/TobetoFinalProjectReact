import TobetoInput from "../../TobetoInput/TobetoInput";
import "./Education.css";
import EducationCard from "./EducationCard/EducationCard";

function Education() {
  return (
    <div className="education-info">
      <div className="row">
        <div className="profile-input col-12 col-md-6 mb-4">
          <label>Egitim Durumu</label>
          <select className="profile-input">
            <option>Seviye Seciniz</option>
            <option>Lisans</option>
            <option>On Lisans</option>
            <option>Yuksek Lisans</option>
            <option>Doktora</option>
          </select>
        </div>
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Universite*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Bolum*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Baslangic Yili*"
        />
        <div className="col-12 col-md-6 mb-4">
          <TobetoInput className="profile-input " label="Mezuniyet Yili*" />
          <div className="d-flex gap-4 mt-4">
            <TobetoInput className="profile-input" type="checkbox" />
            <small>Devam Ediyorum</small>
          </div>
        </div>
      </div>
      <button className="save-button">Kaydet</button>
      <div className="col-12 mt-5">
        <EducationCard />
        <EducationCard />
        <EducationCard />
        <EducationCard />
        <EducationCard />
      </div>
    </div>
  );
}

export default Education;
