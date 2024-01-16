import "./InfoCard.css"

function InfoCard({ background, header, onClick }) {
  return (
    <div className={`info-card ${background} col-9 col-md-3`}>
      <div>
        <h1 className="mt-5">{header}</h1>
        <button className="save-button w-100" onClick={onClick}>
          <strong>Basla</strong>
        </button>
      </div>
    </div>
  );
}

export default InfoCard;
