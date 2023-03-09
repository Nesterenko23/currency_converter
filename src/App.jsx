import styles from "./App.module.scss";
import { CircularProgress } from "@mui/material";
import PrimaryInput from "./Components/PrimaryInput";
import SecondaryInput from "./Components/SecondaryInput";
import useFetchData from "./fetchData";
function App() {
  const rates = useFetchData('https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI')
  let currentEur = (1 * rates["UAH"]) / rates["EUR"];
  let currentUsd = rates["UAH"];

  return (
        <>
        {
          rates.length != 0 ? <div>
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
              <PrimaryInput
                currencies={Object.keys(rates)}
                rates={rates}
              />
              <SecondaryInput
                currencies={Object.keys(rates)}
                rates={rates}
              />
            </div>
          </div>
        </div> : <div className={styles.loadingBlock}>
          <CircularProgress/>
        </div>
        }
        </>
  );
}

export default App;
