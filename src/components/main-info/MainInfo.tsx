import classes from "./MainInfo.module.css";
import arrow from "../../assets/Start-now-arrow.svg";

const MainInfo = () => {
  return (
    <div className={classes["main-info"]}>
      <h1 className={classes.title}>
        <span>Buy Bitcoin,</span> Ethereum, Litecoin and other crypto{" "}
        <span>online</span>
      </h1>
      <p className={classes.description}>
        Why bother going through complicated exchanges? Buy cryptocurrency with
        top payment methods like SEPA bank transfer, Credit and Debit Card,
        Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or
        any other popular crypto directly to your personal wallet without making
        any initial deposits. It's as easy as it gets!
      </p>
      <button className={classes.action}>
        <a href="https://coingate.com">Start now</a>
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default MainInfo;
