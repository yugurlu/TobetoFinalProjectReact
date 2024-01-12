import { useState } from "react";
import "./LectureContentHeader.css";
import arrowIcon from "../../icons/chevron_FILL0.svg";
import LectureVideoHeader from "../LectureVideoHeader/LectureVideoHeader";

function LectureContentHeader() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="content-header">
      <div className="d-flex" onClick={() => setExpand(!expand)}>
        <div>
          <img
            className={expand === true ? "expand" : "unexpand"}
            src={arrowIcon}
          ></img>
        </div>
        <div>
          <strong onClick={() => setExpand(!expand)}>
            Veri Tabanı ve Erişimi: Microsoft SQL Server Database Management
            Basic
          </strong>
        </div>
      </div>
      {expand === true && (
        <>
          <LectureVideoHeader />
          <LectureVideoHeader />
          <LectureVideoHeader />
        </>
      )}
    </div>
  );
}

export default LectureContentHeader;
