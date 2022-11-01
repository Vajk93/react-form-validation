import classes from "./Backgrounds.module.css";
import desktopBg from "../images/bg-main-desktop.png";
import mobileBg from "../images/bg-main-mobile.png";

import React from "react";

const Backgrounds = () => {
  return (
    <React.Fragment>
      <img src={desktopBg} alt="" className={classes.desktopBg}></img>
      <img src={mobileBg} alt="" className={classes.mobileBg}></img>
    </React.Fragment>
  );
};

export default Backgrounds;
