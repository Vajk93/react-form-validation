// import BankCard from "./components/BankCard";
import Form from "./form/Form";
import BankCard from "./card/BankCard";
import classes from "./CardAndForm.module.css";
import { useState } from "react";

// const testDatasOnCard = {
//   cardNumber: "0000 0000 0000 0000",
//   name: "Your Name",
//   month: "00",
//   year: "00",
// };

const CardAndForm = () => {
  const [name, setname] = useState("Your Name");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvcCode, setCvcCode] = useState("000");

  const changeThingsOnCardHandler = (name, cardNumber, month, year, cvc) => {
    setname(name);
    setCardNumber(cardNumber);
    setMonth(month.padStart(2, "0"));
    setYear(year.padStart(2, "0"));
    setCvcCode(cvc.padStart(3, "0"));
  };

  return (
    <div className={classes["card-and-form"]}>
      <BankCard
        className={classes.card}
        cardNumber={cardNumber}
        name={name}
        month={month}
        year={year}
        cvcCode={cvcCode}
      />
      <Form
        className={classes.form}
        changeThingsOnCard={changeThingsOnCardHandler}
      />
    </div>
  );
};

export default CardAndForm;
