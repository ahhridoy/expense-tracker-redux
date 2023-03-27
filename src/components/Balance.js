import React from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/numberWithCommas";

const Balance = () => {
  const { transactions } = useSelector((state) => state.transactions);

  const calculateIncome = (transactions) => {
    let income = 0;
    transactions.forEach((transaction) => {
      const { type, amount } = transaction;
      if (type === "income") {
        income += Number(amount);
      } else {
        income -= Number(amount);
      }
    });
    return income;
  };

  return (
    <div class="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>{" "}
        {transactions?.length > 0 ? (
          <span>{numberWithCommas(calculateIncome(transactions))}</span>
        ) : (
          0
        )}
      </h3>
    </div>
  );
};

export default Balance;