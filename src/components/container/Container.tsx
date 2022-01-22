import React from "react";
import MainInfo from "../main-info/MainInfo";
import Shopping from "../shopping/Shopping";
import classes from "./Container.module.css";

const Container: React.FC<{
  currencyOptions: string[];
  selectFromCurrency: string;
  selectToCurrency: string;
  onChangeFromCurrency: any;
  onChangeToCurrency: any;
  amountFrom: number;
  amountTo: number;
  onChangeFromAmount: any;
  onChangeToAmount: any;
}> = (props) => {
  return (
    <div className={classes.main}>
      <MainInfo />
      <Shopping
        currencyOptions={props.currencyOptions}
        selectFromCurrency={props.selectFromCurrency}
        selectToCurrency={props.selectToCurrency}
        onChangeFromCurrency={props.onChangeFromCurrency}
        onChangeToCurrency={props.onChangeToCurrency}
        amountFrom={props.amountFrom}
        amountTo={props.amountTo}
        onChangeFromAmount={props.onChangeFromAmount}
        onChangeToAmount={props.onChangeToAmount}
      />
    </div>
  );
};

export default Container;
