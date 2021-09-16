import React from "react";
import "./svgDivLayoutBottom.css";

import Rectangle from "../../images/layout/Rectangle.png";

function SvgDivLayoutBottom() {
  return (
    <div className="svg">
      <img
        src={Rectangle}
        alt="RectangleDiv"
        style={{ width: "100%", height: "15px" }}
      />
    </div>
  );
}

export default SvgDivLayoutBottom;
