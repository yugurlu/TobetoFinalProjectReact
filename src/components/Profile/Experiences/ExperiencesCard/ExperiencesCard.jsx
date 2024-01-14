import "./ExperiencesCard.css";

function ExperiencesCard() {
  return (
    <div className="experiences-card mb-4">
      <div className="experiences-card-header d-flex justify-content-between">
        <div className="date">
          <span>2022 - Devam Ediyor</span>
        </div>
        <span>Lisans</span>
      </div>
      <div className="experiences-card-detail d-flex justify-content-between">
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Kurum Adi</span>
          <span className="experiences-card-detail-content">Tobeto</span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Pozisyon</span>
          <span className="experiences-card-detail-content">
            Fullstack Developer
          </span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Sektor</span>
          <span className="experiences-card-detail-content">Yazilim</span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Sehir</span>
          <span className="experiences-card-detail-content">Istanbul</span>
        </div>
      </div>
      <div className="experiences-card-info-button"></div>
      <div className="experiences-card-delete-button"></div>
    </div>
  );
}

export default ExperiencesCard;
