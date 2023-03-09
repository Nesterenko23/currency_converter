import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { currencySelector } from "../../Redux/Slices/currencySlice";
import styles from '../styles/input.module.scss'
import {
  setFirstAmount,
  setSecondAmount,
  setFirstCurrency,
} from "../../Redux/Slices/currencySlice";
const PrimaryInput = ({ currencies, rates }) => {
  const { firstAmount, firstCurrency, secondCurrency } =
    useSelector(currencySelector);
  const dispatch = useDispatch();
  function onAmountChange(firstAmount) {
    dispatch(
      setSecondAmount(
        ((firstAmount * rates[secondCurrency]) / rates[firstCurrency]).toFixed(2)
      )
    );
    dispatch(setFirstAmount(firstAmount));
  }

  function onCurrencyChange(firstCurrency) {
    dispatch(
      setSecondAmount(
        (firstAmount * rates[secondCurrency]) / rates[firstCurrency]
      )
    );
    dispatch(setFirstCurrency(firstCurrency));
  }
  return (
    <div className={styles.inputBlock}>
      <input
        className={styles.input}
        value={firstAmount}
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

export default PrimaryInput;
