import React from "react";
import styles from '../styles/input.module.scss'
import {
  currencySelector,
  setFirstAmount,
  setSecondAmount,
  setSecondCurrency,
} from "../../Redux/Slices/currencySlice";
import { useSelector, useDispatch } from "react-redux";
const SecondaryInput = ({ currencies, rates }) => {
  const dispatch = useDispatch();
  const { firstCurrency, secondCurrency, secondAmount } =
    useSelector(currencySelector);
  function onAmountChange(secondAmount) {
    dispatch(
      setFirstAmount(
        ((secondAmount * rates[firstCurrency]) / rates[secondCurrency]).toFixed(2)
      )
    );
    dispatch(setSecondAmount(secondAmount));
  }

  function onCurrencyChange(secondCurrency) {
    dispatch(
      setFirstAmount(
        (secondAmount * rates[firstCurrency]) / rates[secondCurrency]
      )
    );
    dispatch(setSecondCurrency(secondCurrency));
  }
  return (
    <div className={styles.inputBlock}>
      <input
        className={styles.input}
        value={secondAmount}
        onChange={(e) => onAmountChange(e.target.value)}
      ></input>
      <select className={styles.select} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SecondaryInput;
