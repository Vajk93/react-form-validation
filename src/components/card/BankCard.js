import classes from "./BankCard.module.css";

const BankCard = (props) => {
  return (
    <div className={classes.bankcardContainer}>
      <div className={classes.frontsideCardContainer}>
        <div className={classes.thingsOnCard}>
          <div className={classes.circles}>
            <div></div>
            <div></div>
          </div>
          <div>
            <p className={classes.cardNumber}>{props.cardNumber}</p>
          </div>
          <div className={classes.nameAndDate}>
            <p>{props.name}</p>
            <span>
              {props.month}/{props.year}
            </span>
          </div>
        </div>
      </div>
      <div className={classes.backsideCardContainer}>
        <p className={classes.validationCode}>{props.cvcCode}</p>
      </div>
    </div>
  );
};

export default BankCard;
