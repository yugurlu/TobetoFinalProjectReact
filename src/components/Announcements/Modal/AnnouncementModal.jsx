import React from "react";
import Modal from "react-bootstrap/Modal";

function AnnouncementModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="">
        <div className="modal-content">
          <Modal.Header closeButton>
            <div className="modal-hea">
              <div className="d-flex flex-column modal-header-text">
                <span className="text-dark">
                  <b>Yeni Grupların Discord'a Katılımı</b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Merhabalar,
              <br /> <br />
              Herkes için Kodlama 4A grubunun discorda katılımı yarın
              gerçekleşecek olan Mentor oturumu sonrası yapılacaktır. Mentor
              oturumuna "Eğitimlerim" bölümünden giriş yapabilirsiniz. Tarih:
              8.12.2023 Mentor Oturum Saati: 14.00-15.00 <br /> <br />
              Sevgiler,
            </p>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default AnnouncementModal;
