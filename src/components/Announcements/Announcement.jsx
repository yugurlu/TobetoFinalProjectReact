import React, { useState } from "react";
import "./Announcement.css";
import AnnouncementModal from "./Modal/AnnouncementModal";
import Button from "react-bootstrap/Button";

function Announcement(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div class="col-md-4 col-12 my-4">
      <div class="notfy-card notify">
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between mb-4">
            <span class="type">Duyuru</span>
            <span class="corp-names type">props.announcement.AnnouncementName</span>
          </div>
          <span class="header ">props.announcement.AnnouncementDescription</span>
        </div>
        <div class="d-flex justify-content-between">
          <span class="date">props.date</span>
          <span class="read-more" onClick={() => setModalShow(true)}>
            Devamını oku
          </span>
        </div>
      </div>
      <AnnouncementModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Announcement;
