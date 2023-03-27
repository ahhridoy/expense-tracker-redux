import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "../features/transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
  },
});
