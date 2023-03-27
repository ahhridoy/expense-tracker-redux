import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../features/transactions/transactionsSlice";
import List from "./List";

const Lists = () => {
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transactions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  let content;
  if (isLoading) content = <h1>Loading...</h1>;
  if (!isLoading && isError) content = <h1>Something went wrong</h1>;
  if (!isLoading && !isError && transactions.length === 0)
    content = <h1>Data not found</h1>;
  if (!isLoading && !isError && transactions.length > 0)
    content = transactions.map((transaction) => (
      <List key={transaction._id} transaction={transaction} />
    ));

  return (
    <>
      <p class="second_heading">Your Transactions:</p>
      <div class="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default Lists;
