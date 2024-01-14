import { CheckBox } from "@mui/icons-material";
import TobetoInput from "../../TobetoInput/TobetoInput";
import ExperiencesCard from "./ExperiencesCard/ExperiencesCard";

function Experiences() {
  return (
    <div>
      <div className="row">
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Kurum Adi*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Pozisyon*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Sektor*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Il*"
        />
        <TobetoInput
          className="profile-input col-12 col-md-6 mb-4"
          label="Is Baslangici*"
          type="date"
        />
        <div className="col-12 col-md-6 mb-4">
          <TobetoInput
            className="profile-input "
            label="Is Bitisi*"
            type="date"
          />
          <div className="d-flex gap-4 mt-4">
            <TobetoInput
              className="profile-input"
              type="checkbox" />
            <small>Calismaya Devam Ediyorum</small>
          </div>
        </div>
        <TobetoInput
          className="profile-input col-12 mb-4"
          label="Is Aciklamasi"
          style={{ height: "150px" }}
        />
      </div>
      <button className="save-button">Kaydet</button>
      <div className="col-12 mt-5">
        <ExperiencesCard/>
        <ExperiencesCard/>
        <ExperiencesCard/>
        <ExperiencesCard/>
        <ExperiencesCard/>
      </div>
    </div>
  );
}

export default Experiences;
