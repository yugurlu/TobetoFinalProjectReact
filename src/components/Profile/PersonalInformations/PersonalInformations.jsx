import "./PersonalInformations.css";
import deleteSvg from "../../../icons/delete_FILL0.svg";

function PersonalInformations() {
  return (
    <div className="personal-informations row">
      <div className="col-12 mb-5 text-center">
        <div className="profile-photo">
          <img src="https://pbs.twimg.com/profile_images/1697250796906348546/JAYDV2ix_400x400.jpg"></img>
          <div className="profile-photo-remove"></div>
          <div className="profile-photo-edit"></div>
        </div>
      </div>
      <div className="profile-input col-12 col-md-6 mb-4">
        <label>Adiniz*</label>
        <input value={null}></input>
      </div>
      <div className="profile-input col-12 col-md-6 mb-4">
        <label>Soyadiniz*</label>
        <input value={null}></input>
      </div>
      <div className="profile-input col-12 col-md-6 mb-4">
        <label>Telefon Numaraniz*</label>
        <input value={null}></input>
      </div>
      <div className="profile-input col-12 col-md-6 mb-4">
        <label>Dogum Tarihiniz*</label>
        <input type="date" value={null}></input>
      </div>
      <div className="profile-input col-12 mb-4">
        <label>Ulke*</label>
        <input value={null}></input>
      </div>
    </div>
  );
}

export default PersonalInformations;
