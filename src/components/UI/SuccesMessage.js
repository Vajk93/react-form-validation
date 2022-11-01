import React from "react";
import classes from "./SuccesMessage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SuccesMessage = () => {
  return (
    <div className={classes.succes}>
      <div classes="icon-container">
        <FontAwesomeIcon
          style={{
            color: "hsl(278, 67%, 32%)",
            marginBottom: "20px",
          }}
          icon={faCheckCircle}
          size="3x"
          className="check-icon"
        />
      </div>
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button>Continue</button>
    </div>
  );
};

export default SuccesMessage;
