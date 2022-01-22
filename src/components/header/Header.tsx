import classes from "./Header.module.css";
import logo from "../../assets/Rectangle.svg";
import arrow from "../../assets/Sign-up-arrow.svg";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
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
      <div className={classes["mobile-nav"]}>
        <div className={classes.logo}>
          <img src={logo} alt="coin gate" />
        </div>
        <div className={classes["mobile-nav-dropdown"]}>
          <div className={classes.bar1}></div>
          <div className={classes.bar2}></div>
          <div className={classes.bar3}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
