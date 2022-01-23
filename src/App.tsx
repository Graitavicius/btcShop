import React from "react";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";

const url = "https://api.coingate.com/v2/rates";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState<any[]>([]);
  const [fromCurrency, setFromCurrency] = useState<any>();
  const [toCurrency, setToCurrency] = useState<any>();
  const [exchangeRate, setExchangeRate] = useState();
  const [amountFrom, setAmountFrom] = useState<number>(1);
  const [amountTo, setAmountTo] = useState<number>(1);
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
  }, [fromCurrency, toCurrency]);

  const changeFromCurrencyHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(event.currentTarget.value);
  };

  const changeToCurrencyHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    setToCurrency(event.currentTarget.value);
  };

  const changeFromAmountHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setAmountFrom(+event.currentTarget.value);
    setAmountInFromCurrency(true);
  };

  const changeToAmountHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setAmountTo(+event.currentTarget.value);
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
