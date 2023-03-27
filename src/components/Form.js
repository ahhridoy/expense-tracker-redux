import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postTransaction,
  updateTransaction,
} from "../features/transactions/transactionsSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { editing } = useSelector((state) => state.transactions) || {};

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      postTransaction({ name, type, amount: Number(amount) })
    );
    reset();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateTransaction({
        _id: editing?._id,
        data: { name, type, amount: Number(amount) },
      })
    );
    reset();
  };

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const cancelEditMode = () => {
    reset();
    setEditMode(false);
  };

  useEffect(() => {
    const { _id, name, amount, type } = editing || {};
    if (_id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [dispatch, editing]);

  return (
    <div class="form">
      <h3>Add new transaction</h3>

      <form onSubmit={editMode ? handleUpdate : handleCreate}>
        <div class="form-group">
          <label for="transaction_name">Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div class="form-group radio">
          <label for="transaction_type">Type</label>
          <div class="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              checked={type === "income"}
              onChange={(e) => setType("income")}
            />
            <label for="transaction_type">Income</label>
          </div>
          <div class="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              checked={type === "expense"}
              onChange={(e) => setType("expense")}
            />
            <label for="transaction_type">Expense</label>
          </div>
        </div>

        <div class="form-group">
          <label for="transaction_amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button class="btn" type="submit">
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>

      {editMode && (
        <button onClick={cancelEditMode} class="btn cancel_edit">
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
