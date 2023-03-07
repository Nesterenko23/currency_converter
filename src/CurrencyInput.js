import styles from "./currencyInput.module.scss";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function CurrencyInput(props) {
  return (
    <div className={styles.wrapper}>
      <TextField
        variant="outlined"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
      />
      <Select
        MenuProps={{
          style: {
            maxHeight: 400,
          },
        }}
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
      >
        {props.currencies.map((currency) => (
          <MenuItem value={currency}>{currency}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default CurrencyInput;
