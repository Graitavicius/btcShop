import React from "react";
import "./App.css";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
//import Currency from "../../models/currency";

const url = "https://api.coingate.com/v2/rates";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState<any>([]);
  const [fromCurrency, setFromCurrency] = useState<any>();
  const [toCurrency, setToCurrency] = useState<any>();
  const [exchangeRate, setExchangeRate] = useState();
  const [amountFrom, setAmountFrom] = useState<any>(1);
  const [amountTo, setAmountTo] = useState<any>(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amountFrom;
    toAmount = amountFrom * exchangeRate!;
  } else {
    toAmount = amountTo;
    fromAmount = amountTo / exchangeRate!;
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const firstBaseCurrency = Object.keys(data.merchant.BTC)[2];
        const secondBaseCurrency = Object.keys(data.merchant.BTC)[1];
        setCurrencyOptions([...Object.keys(data.merchant.BTC)]);
        setFromCurrency(firstBaseCurrency);
        setToCurrency(secondBaseCurrency);
        setExchangeRate(data.merchant.BTC[firstBaseCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency !== null && toCurrency !== null) {
      fetch(
        `https://api.coingate.com/v2/rates/merchant/${fromCurrency}/${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => {
          return setExchangeRate(data);
        });
    }

    // if (fromCurrency !== null && toCurrency !== null) {
    //   const fromCurrencyImg = (
    //     <img
    //       src={`https://cryptoicons.org/api/color/${props.selectFromCurrency.toLowerCase()}/20/FFA500`}
    //       alt=""
    //       className={classes["currency-icon"]}
    //     />
    //   );
    // }
    //https://cryptoicons.org/api/color/btc/200/ff00ff
  }, [fromCurrency, toCurrency]);

  const changeFromCurrencyHandler = (event: any) => {
    setFromCurrency(event.target.value);
  };

  const changeToCurrencyHandler = (event: any) => {
    setToCurrency(event.target.value);
  };

  const changeFromAmountHandler = (event: any) => {
    setAmountFrom(event.target.value);
    setAmountInFromCurrency(true);
  };

  const changeToAmountHandler = (event: any) => {
    setAmountTo(event.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <React.Fragment>
      <Header />
      <Container
        selectFromCurrency={fromCurrency}
        selectToCurrency={toCurrency}
        currencyOptions={currencyOptions}
        onChangeFromCurrency={changeFromCurrencyHandler}
        onChangeToCurrency={changeToCurrencyHandler}
        amountFrom={fromAmount}
        amountTo={toAmount}
        onChangeFromAmount={changeFromAmountHandler}
        onChangeToAmount={changeToAmountHandler}
      />
    </React.Fragment>
  );
}

export default App;
