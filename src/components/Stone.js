import React from "react";

import "./Stone.scss";

const Stone = () => {
  return (
    <div className="Stone">
      <div className="Stone__info">
        <div className="Stone__id"></div>
        <div className="Stone__img">
          <img src="images/stone.gif" alt="Kepler-452b" />
        </div>
      </div>
    </div>
  );
};

export default Stone;
