import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstAmount: 1,
  secondAmount: 1,
  firstCurrency: "USD",
  secondCurrency: "EUR",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setFirstCurrency: (state, action) => {
      state.firstCurrency = action.payload;
    },
    setSecondCurrency: (state, action) => {
      state.secondCurrency = action.payload;
    },
    setFirstAmount: (state, action) => {
      state.firstAmount = action.payload;
    },
    setSecondAmount: (state, action) => {
      state.secondAmount = action.payload;
    },
  },
});

export const {
  setFirstAmount,
  setSecondAmount,
  setFirstCurrency,
  setSecondCurrency,
} = currencySlice.actions;
export const currencySelector = (state) => state.currency
export default currencySlice.reducer;
