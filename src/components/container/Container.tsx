import React from "react";
import MainInfo from "../main-info/MainInfo";
import Shopping from "../shopping/Shopping";
import classes from "./Container.module.css";

const Container: React.FC<{
  currencyOptions: string[];
  selectFromCurrency: string;
  selectToCurrency: string;
  onChangeFromCurrency: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangeToCurrency: (event: React.FormEvent<HTMLSelectElement>) => void;
  amountFrom: number;
  amountTo: number;
  onChangeFromAmount: (event: React.FormEvent<HTMLInputElement>) => void;
  onChangeToAmount: (event: React.FormEvent<HTMLInputElement>) => void;
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
