import React from "react";
import "./announcements.css";

export const Announcements = () => {
  return (
    <div class="col-md-2 col-12 my-4">
      <div class="notfy-card notify">
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between mb-4">
            <span class="type">Duyuru</span>
            <span class="corp-names type">İstanbul Kodluyor</span>
          </div>
          <span class="header ">Yeni Grupların Discord'a Katılımı</span>
        </div>
        <div class="d-flex justify-content-between">
          <span class="date">07.12.2023</span>
          <span class="read-more">Devamını Oku</span>
        </div>
      </div>
    </div>
  );
};
