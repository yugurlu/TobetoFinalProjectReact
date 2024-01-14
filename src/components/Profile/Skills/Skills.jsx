import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="row">
        <div className="profile-input col-12 mb-4">
          <label>Yetkinlik</label>
          <select className="profile-input">
            <option>Seviye Seciniz</option>
            <option>Lisans</option>
            <option>On Lisans</option>
            <option>Yuksek Lisans</option>
            <option>Doktora</option>
          </select>
        </div>
      </div>
      <button className="save-button">Kaydet</button>
      <div className="col-12 mt-5">
        <div className="skill-card">
          <strong>Javascript</strong>
        <div className="skill-delete-button"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
