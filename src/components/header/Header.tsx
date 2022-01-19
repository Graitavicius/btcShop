import classes from "./Header.module.css";
import logo from "../../assets/Rectangle.svg";
import arrow from "../../assets/Sign-up-arrow.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-items"]}>
        <div className={classes.logo}>
          <img src={logo} alt="coin gate" />
        </div>
        <div className={classes["header-links"]}>Products</div>
        <div className={classes["header-links"]}>Resources</div>
        <div className={classes["header-links"]}>Buy Instantly</div>
      </div>
      <div className={classes["header-items-actions"]}>
        <button className={classes["log-in-button"]}>Log in</button>
        <button className={classes["sign-up-button"]}>
          <span>Sign up</span>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </header>
  );
};

export default Header;
