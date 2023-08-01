import React from "react";
import "./Diagnostics.css";
import Scan from "@mui/icons-material/BiotechRounded";
import Upload from "@mui/icons-material/FileUploadOutlined";

const Diagnostics = () => {
  return (
    <div className="diag">
      <div className="diag_main">
        <div className="title">
          <h2>diagnostics</h2>
        </div>
        <div className="main">
          <div className="scan-section">
            <Scan className="icon_dig" />
            <span className="scan">scan</span>
          </div>
          <div className="upload-section">
            <Upload className="icon_dig" />
            <span className="upload">upload</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostics;
