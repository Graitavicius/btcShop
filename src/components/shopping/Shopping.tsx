import React from "react";
import classes from "./Shopping.module.css";
import { useEffect, useState } from "react";

const Shopping: React.FC<{
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
  const [imageFromData, setImageFromData] = useState<string>("");
  const [imageToData, setImageToData] = useState<string>("");

  const DUMMY_PAYMENT_METHODS = ["Bank transfer", "Credit Card", "Paysera"];

  useEffect(() => {
    if (props.selectFromCurrency) {
      fetch(
        `https://cryptoicon-api.vercel.app/api/icon/${props.selectFromCurrency.toLowerCase()}`
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
        `https://cryptoicon-api.vercel.app/api/icon/${props.selectToCurrency.toLowerCase()}`
      )
        .then((response) => response.blob())
        .then((image) => {
          const localUrl = URL.createObjectURL(image);
          setImageToData(localUrl);
        });
    }
  }, [props.selectToCurrency]);

  return (
    <React.Fragment>
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
              required
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
              required
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
          <select
            className={classes["bank-select"]}
            name="payment"
            id="payment"
          >
            {DUMMY_PAYMENT_METHODS.map((method: string) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
          <div className={classes["buy-button-container"]}>
            <a href="https://coingate.com">
              <button
                type="button"
                className={classes["buy-button"]}
                disabled={
                  !props.amountFrom ||
                  props.amountFrom <= 0 ||
                  !props.amountTo ||
                  props.amountTo <= 0
                }
              >
                Buy {props.selectToCurrency}
              </button>
            </a>
          </div>
        </form>
      </div>
      <p className={classes["mobile-description"]}>
        Why bother going through complicated exchanges? Buy cryptocurrency with
        top payment methods like SEPA bank transfer, Credit and Debit Card,
        Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or
        any other popular crypto directly to your personal wallet without making
        any initial deposits. It's as easy as it gets!
      </p>
    </React.Fragment>
  );
};

export default Shopping;
