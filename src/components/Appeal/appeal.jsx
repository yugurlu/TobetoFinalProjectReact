import React from "react";
import "./appeal.css";
import DoneIcon from "@mui/icons-material/Done";
import { Check } from "@mui/icons-material";
import { green } from "@mui/material/colors";

const Appeal = () => {
  return (
    <div className="col-md-5 mb-4 ms-5 d-flex appeal-card ">
      <div>
        <div className="appeal-name">Istanbul Kodluyor</div>
        <span className="appeal-name">Bilgilendirme</span>
        <div className=" appeal-stages">
          <div className="d-flex align-items-center ">
            <Check sx={{ color: green[900] }} />
            <span>İstanbul Kodluyor Başvuru Formu onaylandı.</span>
          </div>
          <div className="d-flex align-items-center ">
            <Check sx={{ color: green[900] }} />
            <span>İstanbul Kodluyor Başvuru Formu onaylandı.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appeal;
