import TobetoInput from "../../TobetoInput/TobetoInput";
import "./PersonalInformations.css";

function PersonalInformations() {
  return (
    <div>
      <div className="personal-informations row">
        <div className="col-12 mb-5 text-center">
          <div className="profile-photo">
            <img src="https://pbs.twimg.com/profile_images/1697250796906348546/JAYDV2ix_400x400.jpg"></img>
            <div className="profile-photo-remove"></div>
            <div className="profile-photo-edit"></div>
          </div>
        </div>
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Adiniz*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Soy Adiniz*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Telefon Numaraniz*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Dogum Tarihiniz*"
          type="date"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="TC Kimlik No*"
          type="number"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="E-posta*"
        />
        <TobetoInput 
          className="profile-input col-12 mb-4"
          label="Ulke*" />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Il*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Ilce*"
        />
        <TobetoInput
          className="profile-input col-12 mb-4"
          label="Mahalle / Sokak"
          style={{ height: "150px" }}
        />
        <TobetoInput
          className="profile-input col-12 mb-4"
          label="Hakkimda"
          style={{ height: "150px" }}
        />
      </div>
        <button className="save-button">Kaydet</button>
    </div>
  );
}

export default PersonalInformations;
