import "./Form.css";
import React, { useState } from "react";
import SuccesMessage from "../UI/SuccesMessage";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [nameIsValidMsg, setNameIsValidMsg] = useState(true);

  const [enteredCardNumber, setEnteredCardNumber] = useState("");
  const [cardNumberIsValid, setCardNumberIsValid] = useState(true);
  const [cardNumberIsValidMsg, setCardNumberIsValidMsg] = useState(true);

  const [enteredMonth, setEnteredMonth] = useState("");
  const [monthIsValid, setMonthIsValid] = useState(true);
  const [monthIsValidMsg, setMonthIsValidMsg] = useState(true);

  const [enteredYear, setEnteredYear] = useState("");
  const [yearIsValid, setYearIsValid] = useState(true);
  // doesn'n need
  // const [yearIsValidMsg, setYearIsValidMsg] = useState(true);

  const [enteredCvcCode, setEnteredCvcCode] = useState("");
  const [cvcCodeIsValid, setCvcCodeIsValid] = useState(true);
  const [cvcCodeIsValidMsg, setCvcCodeIsValidMsg] = useState(true);

  const [formIsValid, setFormIsValid] = useState(false);

  const nameChangehandler = (e) => {
    setEnteredName(e.target.value);
    enteredName.length > 0 ? setNameIsValid(true) : setNameIsValid(false);
    enteredName.length > 0 ? setNameIsValidMsg(true) : setNameIsValidMsg(false);
  };

  const cardNumberChangehandler = (e) => {
    setEnteredCardNumber(e.target.value);
    enteredCardNumber.length > 14
      ? setCardNumberIsValid(true)
      : setCardNumberIsValid(false);
    enteredCardNumber.length > 14
      ? setCardNumberIsValidMsg(true)
      : setCardNumberIsValidMsg(false);
  };

  const monthChangehandler = (e) => {
    setEnteredMonth(e.target.value);
    enteredMonth.length > -1 ? setMonthIsValid(true) : setMonthIsValid(false);
    enteredMonth.length > -1
      ? setMonthIsValidMsg(true)
      : setMonthIsValidMsg(false);
  };

  const yearChangehandler = (e) => {
    setEnteredYear(e.target.value);
    enteredYear.length > -1 ? setYearIsValid(true) : setYearIsValid(false);
    setEnteredYear(e.target.value);
    enteredYear.length > -1
      ? setMonthIsValidMsg(true)
      : setMonthIsValidMsg(false);
  };

  const cvcCodeChangehandler = (e) => {
    setEnteredCvcCode(e.target.value);
    enteredCvcCode.length > -1
      ? setCvcCodeIsValid(true)
      : setCvcCodeIsValid(false);
    enteredCvcCode.length > -1
      ? setCvcCodeIsValidMsg(true)
      : setCvcCodeIsValidMsg(false);
  };

  const nameBlurHandler = () => {
    enteredName.length > 1 ? setNameIsValid(true) : setNameIsValid(false);
  };

  const cardNumberBlurHandler = () => {
    enteredCardNumber.length > 15
      ? setCardNumberIsValid(true)
      : setCardNumberIsValid(false);
  };

  const monthBlurHandler = () => {
    enteredMonth.length > 0 ? setMonthIsValid(true) : setMonthIsValid(false);
  };

  const yearBlurHandler = () => {
    enteredYear.length > 0 ? setYearIsValid(true) : setYearIsValid(false);
  };

  const cvcCodeBlurHandler = () => {
    enteredCvcCode.length > 0
      ? setCvcCodeIsValid(true)
      : setCvcCodeIsValid(false);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (
      enteredName.length > 1 &&
      enteredCardNumber.length > 15 &&
      enteredMonth.length > 0 &&
      enteredYear.length > 0 &&
      enteredCvcCode.length > 0
    ) {
      // form is valid
      setFormIsValid(true);
      console.log({
        name: enteredName,
        cardNumber: enteredCardNumber,
        month: enteredMonth,
        year: enteredYear,
        cvc: enteredCvcCode,
      });
      // CHANGE THINGS ON CARD //////////////////////
      props.changeThingsOnCard(
        enteredName,
        enteredCardNumber,
        enteredMonth,
        enteredYear,
        enteredCvcCode
      );
    } else {
      // form is invalid
      console.log("form is INvalid");
      // error input fields:
      enteredName.length > 1 ? setNameIsValid(true) : setNameIsValid(false);
      enteredCardNumber.length > 15
        ? setCardNumberIsValid(true)
        : setCardNumberIsValid(false);
      // month és year should be merged, because only 1 error message for these two
      if (enteredMonth.length > 0 && enteredYear.length > 0) {
        setMonthIsValid(true);
      }
      if (!enteredMonth.length > 0) {
        setMonthIsValid(false);
      }
      if (!enteredYear.length > 0) {
        setYearIsValid(false);
      }
      enteredCvcCode.length > 0
        ? setCvcCodeIsValid(true)
        : setCvcCodeIsValid(false);

      // error messages
      enteredName.length > 1
        ? setNameIsValidMsg(true)
        : setNameIsValidMsg(false);
      enteredCardNumber.length > 15
        ? setCardNumberIsValidMsg(true)
        : setCardNumberIsValidMsg(false);
      // month és year should be merged, because only 1 error message for these two
      if (enteredMonth.length > 0 && enteredYear.length > 0) {
        setMonthIsValidMsg(true);
      }
      if (!enteredMonth.length > 0 || !enteredYear.length > 0) {
        setMonthIsValidMsg(false);
      }
      enteredCvcCode.length > 0
        ? setCvcCodeIsValidMsg(true)
        : setCvcCodeIsValidMsg(false);
    }
  };

  return (
    <React.Fragment>
      <form
        className={!formIsValid ? "form" : "hide-form"}
        onSubmit={formSubmissionHandler}
      >
        <label className="form-label">cardholder name</label>
        <br></br>
        <input
          value={enteredName}
          onChange={nameChangehandler}
          onBlur={nameBlurHandler}
          // ref={nameRef} // ref is not not enough here
          type="text"
          placeholder="e.g. John Doe"
          className={nameIsValid ? "input-control" : "invalid-input-control"}
        />
        <span
          className={nameIsValidMsg ? "error-msg-control" : "invalid-error-msg"}
        >
          Enter a valid name
        </span>
        <br></br>
        <label className="form-label">card number</label>
        <br></br>
        <input
          value={enteredCardNumber}
          onChange={cardNumberChangehandler}
          onBlur={cardNumberBlurHandler}
          className={
            cardNumberIsValid ? "input-control" : "invalid-input-control"
          }
          type="number"
          placeholder="e.g. 1234 5678 6465 0000"
        />
        <span
          className={
            cardNumberIsValidMsg ? "error-msg-control" : "invalid-error-msg"
          }
        >
          Should be 16 number
        </span>
        <div className="twoShortInputsContainer">
          <div>
            <label className="form-label">exp. date (mm/yy)</label>
            <div className="leftShortInputs">
              <input
                value={enteredMonth}
                onChange={monthChangehandler}
                onBlur={monthBlurHandler}
                type="number"
                className={
                  monthIsValid ? "input-control" : "invalid-input-control"
                }
                placeholder="MM"
              />

              <input
                value={enteredYear}
                onChange={yearChangehandler}
                onBlur={yearBlurHandler}
                type="number"
                className={
                  yearIsValid ? "input-control" : "invalid-input-control"
                }
                placeholder="YY"
              />
            </div>
            <span
              className={
                monthIsValidMsg ? "error-msg-control" : "invalid-error-msg"
              }
            >
              can't be blank
            </span>
          </div>
          <div>
            <label className="form-label">cvc</label>
            <br></br>
            <input
              value={enteredCvcCode}
              onChange={cvcCodeChangehandler}
              onBlur={cvcCodeBlurHandler}
              type="number"
              className={
                cvcCodeIsValid ? "input-control" : "invalid-input-control"
              }
              placeholder="e.g. 123"
            />
            <span
              className={
                cvcCodeIsValidMsg ? "error-msg-control" : "invalid-error-msg"
              }
            >
              can't be blank
            </span>
          </div>
        </div>
        <button className="form-btn">Confirm</button>
      </form>
      <div className={formIsValid ? "showSuccesMsg" : "hideSuccesMsg"}>
        <SuccesMessage />
      </div>
    </React.Fragment>
  );
};

export default Form;
