import styles from "./App.module.scss";
import CurrencyInput from "./CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI"
      )
      .then((response) => {
        setRates(response.data.rates);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  let currentEur = (1 * rates["UAH"]) / rates["EUR"];
  let currentUsd = rates["UAH"];

  return (
    <>
      {loading != true ? (
        <div>
          <header>
            <div className={styles.realtimeCurrency}>
              <span>
                <b>USD: {currentUsd?.toFixed(2)}</b>
              </span>
              <span>
                <b>EUR: {currentEur?.toFixed(2)}</b>
              </span>
            </div>
          </header>
          <div className={styles.wrapper}>
            <div className={styles.title}>
            <span>Select the desired currency and enter the values</span>
            </div>
            <div className={styles.currencyBlock}>
              <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(rates)}
                amount={amount1}
                currency={currency1}
              />
              <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)}
                amount={amount2}
                currency={currency2}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default App;
