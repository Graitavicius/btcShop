import React from "react";
import classes from "./Shopping.module.css";
import { useEffect, useState } from "react";

const Shopping: React.FC<{
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
  const [imageFromData, setImageFromData] = useState("");
  const [imageToData, setImageToData] = useState("");

  useEffect(() => {
    if (props.selectFromCurrency) {
      fetch(
        `https://cryptoicons.org/api/color/${props.selectFromCurrency.toLowerCase()}/200/FFA500`
      )
        .then((response) => response.blob())
        .then((image) => {
          const localUrl = URL.createObjectURL(image);
          setImageFromData(localUrl);
        });
    }
  }, [props.selectFromCurrency]);

  useEffect(() => {
    if (props.selectToCurrency) {
      fetch(
        `https://cryptoicons.org/api/color/${props.selectToCurrency.toLowerCase()}/200/FFA500`
      )
        .then((response) => response.blob())
        .then((image) => {
          const localUrl = URL.createObjectURL(image);
          setImageToData(localUrl);
        });
    }
  }, [props.selectToCurrency]);

  return (
    <div className={classes.shop}>
      <div className={classes["form-shadow"]}></div>
      <form className={classes.form}>
        <div className={classes.pay}>
          <input
            className={classes["pay-input1"]}
            type="text"
            id="pay1"
            value="Pay"
            disabled
          />
          <input
            className={classes["pay-input2"]}
            type="number"
            id="pay2"
            value={props.amountFrom}
            onChange={props.onChangeFromAmount}
          />
          <div className={classes["icon-container"]}>
            {props.selectFromCurrency && (
              <img
                src={imageFromData}
                alt=""
                className={classes["currency-icon"]}
              />
            )}
          </div>

          <select
            className={classes["pay-select"]}
            name="pay-select"
            id="pay-select"
            value={props.selectFromCurrency}
            onChange={props.onChangeFromCurrency}
          >
            {props.currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.buy}>
          <input
            className={classes["buy-input1"]}
            type="text"
            id="buy1"
            value="Buy"
            disabled
          />
          <input
            className={classes["buy-input2"]}
            type="number"
            id="buy2"
            value={props.amountTo}
            onChange={props.onChangeToAmount}
          />
          <div className={classes["icon-container"]}>
            {props.selectToCurrency && (
              <img
                src={imageToData}
                alt=""
                className={classes["currency-icon"]}
              />
            )}
          </div>

          <select
            className={classes["buy-select"]}
            name="buy-select"
            id="buy-select"
            value={props.selectToCurrency}
            onChange={props.onChangeToCurrency}
          >
            {props.currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <label className={classes["payment-label"]} htmlFor="payment">
          Payment method
        </label>
        <select className={classes["bank-select"]} name="payment" id="payment">
          <option value="">Bank transfer</option>
          <option value="">Credit Card</option>
          <option value="">Paysera</option>
        </select>
        <div className={classes["buy-button-container"]}>
          <button className={classes["buy-button"]}>
            Buy {props.selectToCurrency}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shopping;
