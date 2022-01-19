import MainInfo from "../main-info/MainInfo";
import Shopping from "../shopping/Shopping";
import classes from "./Container.module.css";

const Container = () => {
  return (
    <div className={classes.main}>
      <MainInfo />
      <Shopping />
    </div>
  );
};

export default Container;
